import { UseFormActionOptions, useFormAction } from '@mqs/react-utils';
import { signOutSchema } from './validation';
import signOutAction from './action';

export type UseFormActionSignOutOptions = Omit<UseFormActionOptions<typeof signOutSchema>, 'action' | 'schema'>;

export function useFormActionSignOut(options: UseFormActionSignOutOptions = {}) {
  return useFormAction({
    ...options,
    action: signOutAction,
    schema: signOutSchema,
  });
}
