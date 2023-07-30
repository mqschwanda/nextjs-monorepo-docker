import jwt, { VerifyOptions as JwtVerifyOptions } from 'jsonwebtoken';
import { prisma } from '@mqs/prisma/client';

const ALGORITHM = 'HS256';
const EXPIRES_IN_AUTHENTICATION = '1h';
const AUDIENCE_AUTHENTICATION = 'authentication';
const ISSUER = '@mqs/token';

type VerifyOptions = Pick<JwtVerifyOptions, 'ignoreExpiration'>;
type AuthenticationToken = {
  data: {
    userId: number,
  }
};

export default class Tokens {
  static async signAuthenticationToken(payload: AuthenticationToken) {
    // TODO: change how the secret for tokens is defined
    if (process.env.JWT_SECRET === undefined) {
      throw new Error('an unexpected error occurred');
    }

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
        userId: payload.data.userId,
        value,
      },
      select: {
        user: true,
        value: true,
      },
    });

    return authenticationToken;
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
    ) as AuthenticationToken;

    const authenticationToken = await prisma.authenticationToken.findFirstOrThrow({
      select: {
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

  static async invalidateAuthenticationToken(
    value: string,
    options: VerifyOptions = {},
  ) {
    const token = await Tokens.verifyAuthenticationToken(value, options);

    try {
      await prisma.authenticationToken.delete({
        where: {
          userId: token.user.id,
          value,
        },
      });
    } catch (error) {
      if (!options.ignoreExpiration) {
        throw error;
      }
    }
  }
}
