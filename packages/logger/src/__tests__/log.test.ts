import logger from '..';

jest.spyOn(global.console, 'log');

describe('@mqs/logger', () => {
  describe('logger', () => {
    it('prints a message', () => {
      logger('hello');
      expect(console.log).toBeCalled(); // eslint-disable-line no-console
    });
  });
});
