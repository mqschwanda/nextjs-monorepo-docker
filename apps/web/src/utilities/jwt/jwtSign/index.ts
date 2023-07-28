import jwt from 'jsonwebtoken';

const ONE_HOUR = 60 * 60;

export default function jwtSign({
  userId,
}: {
  userId: number,
}) {
  if (process.env.JWT_SECRET === undefined) {
    throw new Error('an unexpected error occurred');
  }

  const issuedAt = Date.now();
  const payload = {
    expiredAt: Math.floor(issuedAt / 1000) + ONE_HOUR,
    issuedAt,
    userId,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return token;
}
