import { UseFormActionOptions, useFormAction } from '@mqs/react-utils';
import { signUpSchema } from './validation';
import signUpAction from './action';

export type UseFormActionSignUpOptions = Omit<UseFormActionOptions<typeof signUpSchema>, 'action' | 'schema'>;

export function useFormActionSignUp(options: UseFormActionSignUpOptions = {}) {
  return useFormAction({
    ...options,
    action: signUpAction,
    schema: signUpSchema,
  });
}
