import {
  useCallback,
  useMemo,
  useState,
} from 'react';
import getFormDataForZod from 'utilities/getFormDataForZod';
import { ZodTypeAny, typeToFlattenedError } from 'zod';

/**
 * A hook to handle server actions for a form.
 */
export default function useFormAction<
  TSchema extends ZodTypeAny,
  TSchemaOutput = TSchema['_output'],
>({
  action,
  schema,
}: {
  action: (formData: FormData) => Promise<{
    errors: typeToFlattenedError<TSchemaOutput>,
  }>,
  schema: TSchema,
}) {
  type TErrors = typeToFlattenedError<TSchemaOutput>;
  type TFieldErrors = TErrors['fieldErrors'];

  const [errors, setErrors] = useState<TErrors>({
    fieldErrors: {},
    formErrors: [],
  });

  /**
   * The action prop that is passed to the react form.
   */
  const handleAction = useCallback(
    async (data: FormData) => {
      // handle validation on the client
      const validation = await schema.safeParseAsync(
        getFormDataForZod(data, schema),
      );

      if (!validation.success) {
        setErrors(validation.error.flatten());
      }

      const result = await action(data);

      // finalize validation from the server
      setErrors(result.errors);
    },
    [
      action,
      schema,
      setErrors,
    ],
  );

  /**
   * Clear the field errors for the given keys.
   *
   * This function is useful if errors should be cleared after blur or change of an input element.
   */
  const clearFieldErrors = useCallback(
    (names: Array<keyof TFieldErrors>) => {
      setErrors((current) => ({
        ...current,
        fieldErrors: {
          ...current.fieldErrors,
          ...names.reduce((previous, name) => ({
            ...previous,
            [name]: undefined,
          }), {}),
        },
      }));
    },
    [
      setErrors,
    ],
  );

  return useMemo(
    () => ({
      clearFieldErrors,
      errors,
      handleAction,
    }),
    [
      clearFieldErrors,
      errors,
      handleAction,
    ],
  );
}
