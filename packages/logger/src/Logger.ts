import { LoggerOptions, LoggerOptionsError, LoggerOptionsSerialized } from 'types';
import { LogType } from '@mqs/prisma/client/browser';
import { getConsoleFunction, normalizeResult, serializeOptions } from './utilities';

type Handler<TResult> = (options: LoggerOptionsSerialized) => Promise<TResult>;

export default class Logger<TResult> {
  handler: Handler<TResult>;

  constructor(
    handler: Handler<TResult>,
  ) {
    this.handler = handler;
  }

  public async logger(options: LoggerOptions) {
    const {
      db = true,
      ...serialized
    } = serializeOptions(options);

    const consoleFunction = getConsoleFunction(serialized.type);
    consoleFunction(serialized.message);

    if (!db) {
      return normalizeResult(serialized);
    }

    const result = await this.handler(serialized);

    return normalizeResult(result);
  }

  public async debug(options: Omit<LoggerOptionsSerialized, 'type'>) {
    return this.logger(
      {
        ...options,
        type: LogType.Debug,
      },
    );
  }

  public async error(options: Omit<LoggerOptionsError, 'type'>) {
    return this.logger(
      {
        ...options,
        type: LogType.Error,
      },
    );
  }

  public async info(options: Omit<LoggerOptionsSerialized, 'type'>) {
    return this.logger(
      {
        ...options,
        type: LogType.Info,
      },
    );
  }

  public async log(options: Omit<LoggerOptionsSerialized, 'type'>) {
    return this.logger(
      {
        ...options,
        type: LogType.Log,
      },
    );
  }

  public async warn(options: Omit<LoggerOptionsSerialized, 'type'>) {
    return this.logger(
      {
        ...options,
        type: LogType.Warn,
      },
    );
  }
}
