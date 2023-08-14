/* eslint-disable no-console */

import type { LogType } from '@mqs/graphql-schema';

export default function getConsoleFunction(type: LogType) {
  switch (type) {
    case 'Debug': // TODO: Add prisma client and prisma server module
      return console.debug;

    case 'Error': // TODO: Add prisma client and prisma server module
      return console.error;

    case 'Log': // TODO: Add prisma client and prisma server module
      return console.log;

    case 'Info': // TODO: Add prisma client and prisma server module
      return console.info;

    case 'Warn': // TODO: Add prisma client and prisma server module
      return console.warn;

    default:
      throw new Error(`no ${type} exists in LogType`);
  }
}
