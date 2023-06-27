import {
  useCallback,
  useMemo,
  useState,
} from 'react';
import { ZodType, typeToFlattenedError } from 'zod';

export default function useFormAction<
  TSchema extends ZodType<any, any, any>['_output'],
>({
  action,
}: {
  action: (formData: FormData) => Promise<{
    errors: typeToFlattenedError<TSchema>['fieldErrors'],
  }>,
}) {
  type TFieldErrors = typeToFlattenedError<TSchema>['fieldErrors'];
  type TErrors = Partial<{ [key in keyof TFieldErrors]: string | undefined }>;

  const [errorsServer, setErrorsServer] = useState<TErrors>({});

  const getError = useCallback(
    (name: keyof TFieldErrors, errors: TFieldErrors) => {
      if (!errors) {
        return undefined;
      }

      const [error] = errors[name] || [undefined];

      return error;
    },
    [],
  );

  const handleAction = useCallback(
    async (data: FormData) => {
      const result = await action(data);

      setErrorsServer(
        (Object.keys(result.errors) as Array<keyof TFieldErrors>)
          .reduce((previous, name) => ({
            ...previous,
            [name]: getError(
              name,
              result.errors,
            ),
          }), {} as TErrors),
      );
    },
    [
      action,
      setErrorsServer,
      getError,
    ],
  );

  const clearErrors = useCallback(
    (names: Array<keyof TFieldErrors>) => {
      setErrorsServer((current) => ({
        ...current,
        ...names.reduce((previous, name) => ({
          ...previous,
          [name]: undefined,
        }), {}),
      }));
    },
    [
      setErrorsServer,
    ],
  );

  return useMemo(
    () => ({
      clearErrors,
      errors: errorsServer,
      handleAction,
    }),
    [
      clearErrors,
      errorsServer,
      handleAction,
    ],
  );
}
