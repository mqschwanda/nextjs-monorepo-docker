import jwt, { VerifyOptions as JwtVerifyOptions } from 'jsonwebtoken';
import { prisma } from '@mqs/prisma/client';

const ALGORITHM = 'HS256';
const EXPIRES_IN_AUTHENTICATION = '1h';
const AUDIENCE_AUTHENTICATION = 'authentication';
const EXPIRES_IN_REFRESH = '1d';
const AUDIENCE_REFRESH = 'refresh';
const ISSUER = '@mqs/token';

type VerifyOptions = Pick<JwtVerifyOptions, 'ignoreExpiration'>;
type TokenPayload = {
  data: {
    userId: number,
  }
};

export default class Tokens {
  static async authenticate(
    authenticationTokenValue: string,
    refreshTokenValue: string,
  ) {
    try {
      const authenticationToken = await Tokens.verifyAuthenticationToken(authenticationTokenValue);

      return authenticationToken;
    } catch (authenticationError) {
      const error = authenticationError as Error;

      if (error.name !== 'TokenExpiredError') {
        throw error;
      }

      let refreshToken: Awaited<ReturnType<typeof Tokens.verifyRefreshToken>> | undefined;
      try {
        refreshToken = await Tokens.verifyRefreshToken(refreshTokenValue);
      } catch (refreshError) {
        if (!refreshToken?.authenticationToken) {
          throw new Error('an unexpected error occurred');
        }

        await Tokens.invalidateUserTokens({
          userId: refreshToken.authenticationToken.userId,
        });

        throw refreshError;
      }

      if (!refreshToken?.authenticationToken) {
        throw new Error('an unexpected error occurred');
      }

      await Tokens.invalidateAuthenticationToken(
        authenticationTokenValue,
        {
          ignoreExpiration: true,
        },
      );

      const payload = {
        data: {
          userId: refreshToken.authenticationToken.userId,
        },
      };
      const authenticationToken = await Tokens.signAuthenticationToken(payload);

      return authenticationToken;
    }
  }

  static async invalidateAuthenticationToken(
    value: string,
    options: VerifyOptions = {},
  ) {
    try {
      await prisma.authenticationToken.delete({
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

    await prisma.authenticationToken.deleteMany({
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
    await prisma.authenticationToken.deleteMany({
      where: {
        userId,
      },
    });
  }

  static async signAuthenticationToken(payload: TokenPayload) {
    // TODO: change how the secret for tokens is defined
    if (process.env.JWT_SECRET === undefined) {
      throw new Error('an unexpected error occurred');
    }

    const refreshToken = await Tokens.signRefreshToken(payload);

    const value = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        algorithm: ALGORITHM,
        audience: AUDIENCE_AUTHENTICATION,
        expiresIn: EXPIRES_IN_AUTHENTICATION,
        issuer: ISSUER,
      },
    );

    const authenticationToken = await prisma.authenticationToken.create({
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

    return authenticationToken;
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
        algorithm: ALGORITHM,
        audience: AUDIENCE_REFRESH,
        expiresIn: EXPIRES_IN_REFRESH,
        issuer: ISSUER,
      },
    );

    const refreshToken = await prisma.refreshToken.create({
      data: {
        value,
      },
    });

    return refreshToken;
  }

  static async verifyAuthenticationToken(
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
          ALGORITHM,
        ],
        audience: AUDIENCE_AUTHENTICATION,
        ignoreExpiration,
        issuer: ISSUER,
      },
    ) as TokenPayload;

    const authenticationToken = await prisma.authenticationToken.findFirstOrThrow({
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

    if (token.data.userId !== authenticationToken.user.id) {
      throw new Error('an unexpected error occurred');
    }

    return authenticationToken;
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
          ALGORITHM,
        ],
        audience: AUDIENCE_REFRESH,
        ignoreExpiration,
        issuer: ISSUER,
      },
    ) as TokenPayload;

    const refreshToken = await prisma.refreshToken.findFirstOrThrow({
      select: {
        authenticationToken: true,
        createdAt: true,
        id: true,
        value: true,
      },
      where: {
        value,
      },
    });

    if (token.data.userId !== refreshToken.authenticationToken?.userId) {
      throw new Error('an unexpected error occurred');
    }

    return refreshToken;
  }
}
