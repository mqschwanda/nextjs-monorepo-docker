import jwt, { VerifyOptions as JwtVerifyOptions } from 'jsonwebtoken';
import { prisma } from '@mqs/prisma/client';

type VerifyOptions = Pick<JwtVerifyOptions, 'ignoreExpiration'>;
type TokenPayload = {
  data: {
    userId: number,
  }
};

export default class Tokens {
  static algorithm = 'HS256' as const;

  static audienceAccess = 'access' as const;

  static audienceRefresh = 'refresh' as const;

  static expiresInAccess = '1h' as const;

  static expiresInRefresh = '1d' as const;

  static issuer = '@mqs/token' as const;

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
    } catch (error) {
      if (!options.ignoreExpiration) {
        throw error;
      }
    }
  }

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
    } catch (error) {
      if (!options.ignoreExpiration) {
        throw error;
      }
    }
  }

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
        user: true,
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
