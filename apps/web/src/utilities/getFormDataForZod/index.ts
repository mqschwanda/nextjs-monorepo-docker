import {
  ZodArray,
  ZodEffects,
  ZodNullable,
  ZodObject,
  ZodOptional,
  ZodType,
  ZodTypeAny,
} from 'zod';

function zodKeys<T extends ZodTypeAny>(schema: T): string[] {
  // make sure schema is not null or undefined
  if (schema === null || schema === undefined) {
    return [];
  }
  // check if schema is nullable or optional
  if (
    schema instanceof ZodNullable
    || schema instanceof ZodOptional
  ) return zodKeys(schema.unwrap());
  // check if schema is an array
  if (schema instanceof ZodArray) {
    return zodKeys(schema.element);
  }
  // check if schema is an object
  if (schema instanceof ZodObject) {
    // get key/value pairs from schema
    const entries = Object.entries(schema.shape);
    // loop through key/value pairs
    return entries.flatMap(([key, value]) => {
      // get nested keys
      const nested = value instanceof ZodType
        ? zodKeys(value).map((subKey) => `${key}.${subKey}`)
        : [];
      // return nested keys
      return nested.length ? nested : key;
    });
  }
  // check is schema has attached effects
  if (schema instanceof ZodEffects) {
    return zodKeys(schema.innerType());
  }
  // return empty array
  return [];
}

export default function getFormDataForZod<
  T extends ZodTypeAny,
>(
  formData: FormData,
  schema: T,
) {
  const keys = zodKeys(schema);

  const data = keys.reduce(
    (current, key) => ({
      ...current,
      [key]: formData.get(key),
    }),
    {} as Record<string, any>,
  );

  return data;
}
