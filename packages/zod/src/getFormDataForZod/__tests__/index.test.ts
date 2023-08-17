import { getFormDataForZod, zod } from '@';

describe('@mqs/zod', () => {
  describe('getDataForZod', () => {
    it('converts form data into object', () => {
      const schema = zod.object({
        bar: zod.string(),
        foo: zod.string(),
      });

      const formData = new FormData();
      formData.append('foo', 'bar');
      formData.append('bar', 'foo');

      const result = getFormDataForZod(formData, schema);

      expect(result).toStrictEqual(
        {
          bar: 'foo',
          foo: 'bar',
        },
      );
    });
  });
});
