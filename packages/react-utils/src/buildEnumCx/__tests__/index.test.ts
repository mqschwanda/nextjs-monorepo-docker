import { buildEnumCx } from '@';

enum TestVariant {
  test = 'test',
  hello = 'world',
}

describe('@mqs/react-utils', () => {
  describe('buildEnumCx', () => {
    it('should return undefined variant as undefined', () => {
      const className = buildEnumCx(
        TestVariant,
        undefined,
      );

      expect(className).toBe(undefined);
    });

    it('should return variant as mapped class name', () => {
      Object.keys(TestVariant).forEach((key) => {
        const variant = key as keyof typeof TestVariant;

        const className = buildEnumCx(
          TestVariant,
          variant,
        );

        expect(className).toBe(TestVariant[variant]);
      });
    });
  });
});
