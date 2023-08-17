/* eslint-disable no-console */

import { LogType } from '@mqs/prisma/client/browser';

export default function getConsoleFunction(type: LogType) {
  switch (type) {
    case LogType.Debug:
      return console.debug;

    case LogType.Error:
      return console.error;

    case LogType.Log:
      return console.log;

    case LogType.Info:
      return console.info;

    case LogType.Warn:
      return console.warn;

    default:
      throw new Error(`no ${type} exists in LogType`);
  }
}
