import { LoggerOptions, LoggerOptionsError, LoggerOptionsSerialized } from 'types';
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
        type: 'Debug', // TODO: Add prisma client and prisma server module
      },
    );
  }

  public async error(options: Omit<LoggerOptionsError, 'type'>) {
    return this.logger(
      {
        ...options,
        type: 'Error', // TODO: Add prisma client and prisma server module
      },
    );
  }

  public async info(options: Omit<LoggerOptionsSerialized, 'type'>) {
    return this.logger(
      {
        ...options,
        type: 'Info', // TODO: Add prisma client and prisma server module
      },
    );
  }

  public async log(options: Omit<LoggerOptionsSerialized, 'type'>) {
    return this.logger(
      {
        ...options,
        type: 'Log', // TODO: Add prisma client and prisma server module
      },
    );
  }

  public async warn(options: Omit<LoggerOptionsSerialized, 'type'>) {
    return this.logger(
      {
        ...options,
        type: 'Warn', // TODO: Add prisma client and prisma server module
      },
    );
  }
}
