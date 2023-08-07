import prisma, { LogType } from '@mqs/prisma/client';
import logger from '..';

jest.spyOn(global.console, 'debug').mockImplementation(() => { });
jest.spyOn(global.console, 'error').mockImplementation(() => { });
jest.spyOn(global.console, 'info').mockImplementation(() => { });
jest.spyOn(global.console, 'log').mockImplementation(() => { });
jest.spyOn(global.console, 'warn').mockImplementation(() => { });
jest.spyOn(prisma.log, 'create').mockImplementation();

afterEach(() => {
  jest.clearAllMocks();
});
describe('@mqs/logger', () => {
  describe('server', () => {
    describe('logger.debug', () => {
      it('prints a message using shorthand method', () => {
        logger.debug({
          message: 'hello',
        });

        expect(console.debug).toHaveBeenCalledTimes(1); // eslint-disable-line no-console
        expect(prisma.log.create).toHaveBeenCalledTimes(1);
      });

      it('prints a message using generic method', () => {
        logger.logger({
          message: 'hello',
          type: LogType.Debug,
        });

        expect(console.debug).toHaveBeenCalledTimes(1); // eslint-disable-line no-console
        expect(prisma.log.create).toHaveBeenCalledTimes(1);
      });
    });

    describe('logger.error', () => {
      it('prints a message using shorthand method', () => {
        logger.error({
          message: 'hello',
        });

        expect(console.error).toHaveBeenCalledTimes(1); // eslint-disable-line no-console
        expect(prisma.log.create).toHaveBeenCalledTimes(1);
      });

      it('prints a message using generic method', () => {
        logger.logger({
          message: 'hello',
          type: LogType.Error,
        });

        expect(console.error).toHaveBeenCalledTimes(1); // eslint-disable-line no-console
        expect(prisma.log.create).toHaveBeenCalledTimes(1);
      });
    });

    describe('logger.info', () => {
      it('prints a message using shorthand method', () => {
        logger.info({
          message: 'hello',
        });

        expect(console.info).toHaveBeenCalledTimes(1); // eslint-disable-line no-console
        expect(prisma.log.create).toHaveBeenCalledTimes(1);
      });

      it('prints a message using generic method', () => {
        logger.logger({
          message: 'hello',
          type: LogType.Info,
        });

        expect(console.info).toHaveBeenCalledTimes(1); // eslint-disable-line no-console
        expect(prisma.log.create).toHaveBeenCalledTimes(1);
      });
    });

    describe('logger.log', () => {
      it('prints a message using shorthand method', () => {
        logger.log({
          message: 'hello',
        });

        expect(console.log).toHaveBeenCalledTimes(1); // eslint-disable-line no-console
        expect(prisma.log.create).toHaveBeenCalledTimes(1);
      });

      it('prints a message using generic method', () => {
        logger.logger({
          message: 'hello',
          type: LogType.Log,
        });

        expect(console.log).toHaveBeenCalledTimes(1); // eslint-disable-line no-console
        expect(prisma.log.create).toHaveBeenCalledTimes(1);
      });
    });

    describe('logger.warn', () => {
      it('prints a message using shorthand method', () => {
        logger.warn({
          message: 'hello',
        });

        expect(console.warn).toHaveBeenCalledTimes(1); // eslint-disable-line no-console
        expect(prisma.log.create).toHaveBeenCalledTimes(1);
      });

      it('prints a message using generic method', () => {
        logger.logger({
          message: 'hello',
          type: LogType.Warn,
        });

        expect(console.warn).toHaveBeenCalledTimes(1); // eslint-disable-line no-console
        expect(prisma.log.create).toHaveBeenCalledTimes(1);
      });
    });
  });
});
