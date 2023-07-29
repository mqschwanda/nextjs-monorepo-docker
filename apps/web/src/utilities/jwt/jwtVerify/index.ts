import jwt, { VerifyOptions } from 'jsonwebtoken';
import { Token } from '../types';
import { ALGORITHM, AUDIENCE, ISSUER } from '../constants';

export default function jwtVerify(
  value: string,
  {
    ignoreExpiration = false,
  }: Pick<VerifyOptions, 'ignoreExpiration'> = {},
) {
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
      audience: AUDIENCE,
      ignoreExpiration,
      issuer: ISSUER,
    },
  ) as Token;

  return token;
}
