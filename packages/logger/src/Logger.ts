import { LoggerOptions, LoggerOptionsError, LoggerOptionsFinal } from 'types';
import { LogType } from '@prisma/client';
import { getConsoleFunction, serializeOptions } from './utilities';

type Handler<TResult> = (options: LoggerOptions) => Promise<TResult>;

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
      return serialized;
    }

    const result = await this.handler(serialized);

    return result;
  }

  public async debug(options: Omit<LoggerOptionsFinal, 'type'>) {
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

  public async info(options: Omit<LoggerOptionsFinal, 'type'>) {
    return this.logger(
      {
        ...options,
        type: LogType.Info,
      },
    );
  }

  public async log(options: Omit<LoggerOptionsFinal, 'type'>) {
    return this.logger(
      {
        ...options,
        type: LogType.Log,
      },
    );
  }

  public async warn(options: Omit<LoggerOptionsFinal, 'type'>) {
    return this.logger(
      {
        ...options,
        type: LogType.Warn,
      },
    );
  }
}
