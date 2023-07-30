import jwt, { VerifyOptions as JwtVerifyOptions } from 'jsonwebtoken';

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
  static signAuthenticationToken(payload: AuthenticationToken) {
    // TODO: change how the secret for tokens is defined
    if (process.env.JWT_SECRET === undefined) {
      throw new Error('an unexpected error occurred');
    }

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        algorithm: ALGORITHM,
        audience: AUDIENCE_AUTHENTICATION,
        expiresIn: EXPIRES_IN_AUTHENTICATION,
        issuer: ISSUER,
      },
    );

    return token;
  }

  static verifyAuthenticationToken(
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

    return token;
  }
}
