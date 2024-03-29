import jwt, { VerifyOptions as JwtVerifyOptions } from 'jsonwebtoken';
import { Prisma, prisma } from '@mqs/prisma/client';
import { ErrorUnexpected } from '@mqs/errors/errors';

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
          throw new ErrorUnexpected();
        }

        await Tokens.invalidateUserTokens({
          userId: refreshToken.accessToken.user.id,
        });

        throw refreshError;
      }

      if (!refreshToken?.accessToken) {
        throw new ErrorUnexpected();
      }

      await Tokens.invalidateAccessToken(
        accessTokenValue,
        {
          ignoreExpiration: true,
        },
      );

      const payload = {
        data: {
          userId: refreshToken.accessToken.user.id,
        },
      };
      const accessToken = await Tokens.signAccessToken(payload);

      return accessToken;
    }
  }

  /**
   * Get JWT secret
   */
  static get jwtSecret() { // eslint-disable-line class-methods-use-this
    const JWT_SECRET = process.env.JWT_SECRET; // eslint-disable-line prefer-destructuring

    if (!JWT_SECRET) {
      throw new ErrorUnexpected();
    }

    return JWT_SECRET;
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
    const refreshToken = await Tokens.signRefreshToken(payload);

    const value = jwt.sign(
      payload,
      this.jwtSecret,
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
      include: {
        refreshToken: true,
        user: {
          include: {
            roles: {
              include: {
                role: true,
              },
            },
          },
        },
      },
    });

    return accessToken;
  }

  /**
   * Create new refresh token pair for a given user.
   */
  static async signRefreshToken(payload: TokenPayload) {
    const value = jwt.sign(
      payload,
      this.jwtSecret,
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

    const token = jwt.verify(
      value,
      this.jwtSecret,
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
      include: {
        refreshToken: true,
        user: {
          include: {
            roles: {
              include: {
                role: true,
              },
            },
          },
        },
      },
      where: {
        value,
      },
    });

    if (token.data.userId !== accessToken.user.id) {
      throw new ErrorUnexpected();
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

    const token = jwt.verify(
      value,
      this.jwtSecret,
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
      include: {
        accessToken: {
          include: {
            user: {
              include: {
                roles: {
                  include: {
                    role: true,
                  },
                },
              },
            },
          },
        },
      },
      where: {
        value,
      },
    });

    if (token.data.userId !== refreshToken.accessToken?.user.id) {
      throw new ErrorUnexpected();
    }

    return refreshToken;
  }
}
