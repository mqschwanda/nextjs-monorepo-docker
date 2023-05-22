import buildEnumCx from '..';

enum TestVariant {
  test = 'test',
}

describe('@mqs/react-server-components', () => {
  describe('utilities', () => {
    describe('buildEnumCx', () => {
      it('should return undefined vairant as undefined', () => {
        const className = buildEnumCx(
          TestVariant,
          undefined,
        );

        expect(className).toBe(undefined);
      });

      it('should return vairant as class name', () => {
        const className = buildEnumCx(
          TestVariant,
          'test',
        );

        expect(className).toBe('test');
      });
    });
  });
});
