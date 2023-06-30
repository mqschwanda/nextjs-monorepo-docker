import {
  useCallback,
  useMemo,
  useState,
} from 'react';
import { ZodTypeAny, typeToFlattenedError } from 'zod';

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

  const [errorsServer, setErrorsServer] = useState<TErrors>({
    fieldErrors: {},
    formErrors: [],
  });

  const handleAction = useCallback(
    async (data: FormData) => {
      const result = await action(data);

      setErrorsServer(result.errors);
    },
    [
      action,
      setErrorsServer,
    ],
  );

  const clearFieldErrors = useCallback(
    (names: Array<keyof TFieldErrors>) => {
      setErrorsServer((current) => ({
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
      setErrorsServer,
    ],
  );

  return useMemo(
    () => ({
      clearFieldErrors,
      errors: errorsServer,
      handleAction,
    }),
    [
      clearFieldErrors,
      errorsServer,
      handleAction,
    ],
  );
}
