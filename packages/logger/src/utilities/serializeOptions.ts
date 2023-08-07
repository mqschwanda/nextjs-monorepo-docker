import { LogType } from '@mqs/prisma/client';
import { serializeError } from 'serialize-error';
import { LoggerOptions, LoggerOptionsError, LoggerOptionsFinal } from 'types';

function optionsIsError(options: LoggerOptions): options is LoggerOptionsError {
  return options.type === LogType.Error;
}

export default function serializeOptions(options: LoggerOptions): LoggerOptionsFinal {
  if (optionsIsError(options)) {
    if (options.payload instanceof Error) {
      return {
        ...options,
        payload: serializeError(options.payload),
      };
    }
  }

  return options as LoggerOptionsFinal;
}
