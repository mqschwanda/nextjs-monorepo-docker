import * as z from '@';

describe('@mqs/zod', () => {
  describe('getZodKeys', () => {
    it('gets keys for zod object', () => {
      const schema = z
        .object({
          bar: z.string(),
          foo: z.string(),
        });

      const result = z.getZodKeys(schema);

      expect(result).toStrictEqual(['bar', 'foo']);
    });

    it('gets keys for zod object with effects', () => {
      const schema = z
        .object({
          bar: z.string(),
          foo: z.string(),
        })
        .refine(
          (obj) => obj.bar !== 'bar',
          {
            message: 'bar should not equal bar',
            path: ['bar'],
          },
        );

      const result = z.getZodKeys(schema);

      expect(result).toStrictEqual(['bar', 'foo']);
    });
  });
});
