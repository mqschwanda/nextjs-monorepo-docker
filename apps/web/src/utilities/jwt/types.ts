import { JwtPayload } from 'jsonwebtoken';

export type Token
  = Required<Pick<JwtPayload, 'iat' | 'exp' | 'aud' | 'iss'>>
  & {
    data: {
      userId: number,
    }
  };
