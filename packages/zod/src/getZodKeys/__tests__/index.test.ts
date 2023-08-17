import { getZodKeys, zod } from '@';

describe('@mqs/zod', () => {
  describe('getZodKeys', () => {
    it('gets keys for zod object', () => {
      const schema = zod
        .object({
          bar: zod.string(),
          foo: zod.string(),
        });

      const result = getZodKeys(schema);

      expect(result).toStrictEqual(['bar', 'foo']);
    });

    it('gets keys for zod object with effects', () => {
      const schema = zod
        .object({
          bar: zod.string(),
          foo: zod.string(),
        })
        .refine(
          (obj) => obj.bar !== 'bar',
          {
            message: 'bar should not equal bar',
            path: ['bar'],
          },
        );

      const result = getZodKeys(schema);

      expect(result).toStrictEqual(['bar', 'foo']);
    });
  });
});
