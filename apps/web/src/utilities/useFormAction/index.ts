import {
  useCallback,
  useMemo,
  useState,
} from 'react';
import { ZodTypeAny, typeToFlattenedError } from 'zod';

/**
 * A hook to handle server actions for a form.
 */
export default function useFormAction<
  TSchema extends ZodTypeAny['_output'],
>({
  action,
}: {
  action: (formData: FormData) => Promise<{
    errors: typeToFlattenedError<TSchema>,
  }>,
}) {
  type TErrors = typeToFlattenedError<TSchema>;
  type TFieldErrors = TErrors['fieldErrors'];

  const [errors, setServer] = useState<TErrors>({
    fieldErrors: {},
    formErrors: [],
  });

  /**
   * The action prop that is passed to the react form.
   */
  const handleAction = useCallback(
    async (data: FormData) => {
      const result = await action(data);

      setServer(result.errors);
    },
    [
      action,
      setServer,
    ],
  );

  /**
   * Clear the field errors for the given keys.
   *
   * This function is useful if errors should be cleared after blur or change of an input element.
   */
  const clearFieldErrors = useCallback(
    (names: Array<keyof TFieldErrors>) => {
      setServer((current) => ({
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
      setServer,
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
