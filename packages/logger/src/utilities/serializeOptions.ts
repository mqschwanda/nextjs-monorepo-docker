import { serialize as serializeError } from '@mqs/errors/utilities';
import { LogType } from '@mqs/prisma/client/browser';
import { LoggerOptions, LoggerOptionsError, LoggerOptionsSerialized } from 'types';

function optionsIsError(options: LoggerOptions): options is LoggerOptionsError {
  return options.type === LogType.Error;
}

export default function serializeOptions(options: LoggerOptions): LoggerOptionsSerialized {
  if (optionsIsError(options)) {
    if (options.payload instanceof Error) {
      return {
        ...options,
        payload: serializeError(options.payload),
      };
    }
  }

  const payload = options.payload
    ? JSON.parse(JSON.stringify(options.payload))
    : undefined;

  return {
    ...options,
    payload,
  };
}
