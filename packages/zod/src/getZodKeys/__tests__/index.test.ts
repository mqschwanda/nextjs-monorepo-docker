import * as z from 'zod';
import { getZodKeys } from '@';

describe('@mqs/zod', () => {
  describe('getZodKeys', () => {
    it('gets keys for zod object', () => {
      const schema = z
        .object({
          bar: z.string(),
          foo: z.string(),
        });

      const result = getZodKeys(schema);

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

      const result = getZodKeys(schema);

      expect(result).toStrictEqual(['bar', 'foo']);
    });
  });
});
