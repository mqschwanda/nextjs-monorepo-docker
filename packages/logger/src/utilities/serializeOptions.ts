import { serializeError } from 'serialize-error';
import { LoggerOptions, LoggerOptionsError, LoggerOptionsSerialized } from 'types';

function optionsIsError(options: LoggerOptions): options is LoggerOptionsError {
  return options.type === 'Error'; // TODO: Add prisma client and prisma server module
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
