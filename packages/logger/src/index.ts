import prisma from '@mqs/prisma/client';
import { LoggerOptionsSerialized } from './types';
import Logger from './Logger';

async function handler(options: LoggerOptionsSerialized) {
  const {
    message,
    payload,
    type,
  } = options;

  const result = await prisma.log.create({
    data: {
      message,
      payload,
      type,
    },
  });

  return result;
}

export default new Logger(handler);
