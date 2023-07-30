import jwt, { VerifyOptions as JwtVerifyOptions } from 'jsonwebtoken';
import { Prisma, prisma } from '@mqs/prisma/client';

type VerifyOptions = Pick<JwtVerifyOptions, 'ignoreExpiration'>;
type TokenPayload = {
  data: {
    userId: number,
  }
};

/**
 * Handle authentication with access and refresh tokens connected to the database.
 */
export default class Tokens {
  /**
   * JSON Web Token algorithm for access and refresh tokens
   */
  static algorithm = 'HS256' as const;

  /**
   * Access token audience
   */
  static audienceAccess = 'access' as const;

  /**
   * Refresh token audience
   */
  static audienceRefresh = 'refresh' as const;

  /**
   * Access token time until expiration
   */
  static expiresInAccess = '1h' as const;

  /**
   * Refresh token time until expiration
   */
  static expiresInRefresh = '1d' as const;

  /**
   * JSON Web Token issuer for access and refresh tokens
   */
  static issuer = '@mqs/token' as const;

  /**
   * Confirm that the access token is still valid, and if it is not use the refresh token to generate a new token pair.
   * If both the access token and refresh token are not valid, all tokens for the associated user will be invalidated.
   */
  static async authenticate(
    accessTokenValue: string,
    refreshTokenValue: string,
  ) {
    try {
      const accessToken = await Tokens.verifyAccessToken(accessTokenValue);

      return accessToken;
    } catch (accessError) {
      const error = accessError as Error;

      if (error.name !== 'TokenExpiredError') {
        throw error;
      }

      let refreshToken: Awaited<ReturnType<typeof Tokens.verifyRefreshToken>> | undefined;
      try {
        refreshToken = await Tokens.verifyRefreshToken(refreshTokenValue);
      } catch (refreshError) {
        if (!refreshToken?.accessToken) {
          throw new Error('an unexpected error occurred');
        }

        await Tokens.invalidateUserTokens({
          userId: refreshToken.accessToken.userId,
        });

        throw refreshError;
      }

      if (!refreshToken?.accessToken) {
        throw new Error('an unexpected error occurred');
      }

      await Tokens.invalidateAccessToken(
        accessTokenValue,
        {
          ignoreExpiration: true,
        },
      );

      const payload = {
        data: {
          userId: refreshToken.accessToken.userId,
        },
      };
      const accessToken = await Tokens.signAccessToken(payload);

      return accessToken;
    }
  }

  /**
   * Delete access token from database to prevent future use.
   */
  static async invalidateAccessToken(
    value: string,
    options: VerifyOptions = {},
  ) {
    try {
      await prisma.accessToken.delete({
        where: {
          value,
        },
      });
    } catch (e) {
      const error = e as Error;
      if (
        options.ignoreExpiration
        && (
          error instanceof Prisma.PrismaClientKnownRequestError
          && error.message.includes('Record to delete does not exist')
        )
      ) {
        return;
      }

      throw error;
    }
  }

  /**
   * Delete refresh token from database to prevent future use.
   */
  static async invalidateRefreshToken(
    value: string,
    options: VerifyOptions = {},
  ) {
    try {
      await prisma.refreshToken.delete({
        where: {
          value,
        },
      });
    } catch (e) {
      const error = e as Error;
      if (
        options.ignoreExpiration
        && (
          error instanceof Prisma.PrismaClientKnownRequestError
          && error.message.includes('Record to delete does not exist')
        )
      ) {
        return;
      }

      throw error;
    }
  }

  /**
   * Delete access and refresh tokens from database that are older than a day to free up space.
   */
  static async invalidateStaleTokens() {
    const now = new Date();
    const staleDate = new Date(now.setHours(now.getHours() - 25));

    await prisma.accessToken.deleteMany({
      where: {
        createdAt: {
          lte: staleDate,
        },
      },
    });
  }

  /**
   * Delete access and refresh tokens from database for a given user.
   */
  static async invalidateUserTokens({
    userId,
  }: {
    userId: number,
  }) {
    await prisma.accessToken.deleteMany({
      where: {
        userId,
      },
    });
  }

  /**
   * Create new access and refresh token pair for a given user.
   */
  static async signAccessToken(payload: TokenPayload) {
    // TODO: change how the secret for tokens is defined
    if (process.env.JWT_SECRET === undefined) {
      throw new Error('an unexpected error occurred');
    }

    const refreshToken = await Tokens.signRefreshToken(payload);

    const value = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        algorithm: Tokens.algorithm,
        audience: Tokens.audienceAccess,
        expiresIn: Tokens.expiresInAccess,
        issuer: Tokens.issuer,
      },
    );

    const accessToken = await prisma.accessToken.create({
      data: {
        refreshTokenId: refreshToken.id,
        userId: payload.data.userId,
        value,
      },
      select: {
        createdAt: true,
        id: true,
        refreshToken: true,
        user: true,
        value: true,
      },
    });

    return accessToken;
  }

  /**
   * Create new refresh token pair for a given user.
   */
  static async signRefreshToken(payload: TokenPayload) {
    // TODO: change how the secret for tokens is defined
    if (process.env.JWT_SECRET === undefined) {
      throw new Error('an unexpected error occurred');
    }

    const value = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        algorithm: Tokens.algorithm,
        audience: Tokens.audienceRefresh,
        expiresIn: Tokens.expiresInRefresh,
        issuer: Tokens.issuer,
      },
    );

    const refreshToken = await prisma.refreshToken.create({
      data: {
        value,
      },
    });

    return refreshToken;
  }

  /**
   * Verify and decode access token and validate that it exists in the database.
   */
  static async verifyAccessToken(
    value: string,
    options: VerifyOptions = {},
  ) {
    const {
      ignoreExpiration = false,
    } = options;

    // TODO: change how the secret for tokens is defined
    if (process.env.JWT_SECRET === undefined) {
      throw new Error('an unexpected error occurred');
    }

    const token = jwt.verify(
      value,
      process.env.JWT_SECRET,
      {
        algorithms: [
          Tokens.algorithm,
        ],
        audience: Tokens.audienceAccess,
        ignoreExpiration,
        issuer: Tokens.issuer,
      },
    ) as TokenPayload;

    const accessToken = await prisma.accessToken.findFirstOrThrow({
      select: {
        createdAt: true,
        id: true,
        refreshToken: true,
        user: {
          select: {
            createdAt: true,
            email: true,
            nameFirst: true,
            nameLast: true,
            password: true,
            roles: true,
          },
        },
        value: true,
      },
      where: {
        value,
      },
    });

    if (token.data.userId !== accessToken.user.id) {
      throw new Error('an unexpected error occurred');
    }

    return accessToken;
  }

  /**
   * Verify and decode refresh token and validate that it exists in the database.
   */
  static async verifyRefreshToken(
    value: string,
    options: VerifyOptions = {},
  ) {
    const {
      ignoreExpiration = false,
    } = options;

    // TODO: change how the secret for tokens is defined
    if (process.env.JWT_SECRET === undefined) {
      throw new Error('an unexpected error occurred');
    }

    const token = jwt.verify(
      value,
      process.env.JWT_SECRET,
      {
        algorithms: [
          Tokens.algorithm,
        ],
        audience: Tokens.audienceRefresh,
        ignoreExpiration,
        issuer: Tokens.issuer,
      },
    ) as TokenPayload;

    const refreshToken = await prisma.refreshToken.findFirstOrThrow({
      select: {
        accessToken: true,
        createdAt: true,
        id: true,
        value: true,
      },
      where: {
        value,
      },
    });

    if (token.data.userId !== refreshToken.accessToken?.userId) {
      throw new Error('an unexpected error occurred');
    }

    return refreshToken;
  }
}
