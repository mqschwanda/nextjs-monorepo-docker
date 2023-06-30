import * as z from '@';

describe('@mqs/zod', () => {
  describe('getDataForZod', () => {
    it('converts form data into object', () => {
      const schema = z.object({
        bar: z.string(),
        foo: z.string(),
      });

      const formData = new FormData();
      formData.append('foo', 'bar');
      formData.append('bar', 'foo');

      const result = z.getFormDataForZod(formData, schema);

      expect(result).toStrictEqual(
        {
          bar: 'foo',
          foo: 'bar',
        },
      );
    });
  });
});
