import type { Prisma } from '@mqs/prisma/client';

export type LoggerOptionsFinal
  = Omit<Prisma.LogCreateInput, 'createdAt'>
  & {
    db?: boolean,
  };

export type LoggerOptionsError
  = Omit<LoggerOptionsFinal, 'type' | 'payload'>
  & {
    payload?: Error,
    type: 'Error',
  };

export type LoggerOptions
  = LoggerOptionsFinal
  | LoggerOptionsError;
