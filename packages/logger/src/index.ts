import prisma from '@mqs/prisma/client';
import { LoggerOptions } from './types';
import Logger from './Logger';

async function handler(options: LoggerOptions) {
  const result = await prisma.log.create({
    data: options,
  });

  return result;
}

export default new Logger(handler);
