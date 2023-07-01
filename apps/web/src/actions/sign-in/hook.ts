import { UseFormActionOptions, useFormAction } from '@mqs/react-utils';
import { signInSchema } from './validation';
import signInAction from './action';

export type UseFormActionSignInOptions = Omit<UseFormActionOptions<typeof signInSchema>, 'action' | 'schema'>;

export function useFormActionSignIn(options: UseFormActionSignInOptions = {}) {
  return useFormAction({
    ...options,
    action: signInAction,
    schema: signInSchema,
  });
}
