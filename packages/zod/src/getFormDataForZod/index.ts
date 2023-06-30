import {
  ZodTypeAny,
} from 'zod';
import getZodKeys from '../getZodKeys';

export default function getFormDataForZod<
  T extends ZodTypeAny,
>(
  formData: FormData,
  schema: T,
) {
  const keys = getZodKeys(schema);

  const data = keys.reduce(
    (current, key) => ({
      ...current,
      [key]: formData.get(key),
    }),
    {} as Record<string, any>,
  );

  return data;
}
