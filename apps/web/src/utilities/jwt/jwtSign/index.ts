import jwt from 'jsonwebtoken';
import { Token } from '../types';
import { ALGORITHM, AUDIENCE, ISSUER } from '../constants';

export default function jwtSign({
  userId,
}: {
  userId: number,
}) {
  if (process.env.JWT_SECRET === undefined) {
    throw new Error('an unexpected error occurred');
  }

  const payload: Pick<Token, 'data'> = {
    data: {
      userId,
    },
  };
  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
      algorithm: ALGORITHM,
      audience: AUDIENCE,
      expiresIn: '1h',
      issuer: ISSUER,
    },
  );

  return token;
}
