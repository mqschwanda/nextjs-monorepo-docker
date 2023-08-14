import type { Prisma } from '@mqs/prisma/client';

export type LoggerOptionsSerialized
  = Omit<Prisma.LogCreateInput, 'createdAt'>
  & {
    db?: boolean,
  };

export type LoggerOptionsError
  = Omit<LoggerOptionsSerialized, 'type' | 'payload'>
  & {
    payload?: Error,
    type: 'Error',
  };

export type LoggerOptions
  = LoggerOptionsSerialized
  | LoggerOptionsError;

export type LoggerResult = {
  createdAt?: Date;
  id?: number;
  message: string;
  payload?: any;
};
