'use client';

import {
  Button,
  FormControl,
  Label,
} from '@mqs/react-server-components';
import { DetailedHTMLProps, FormHTMLAttributes, useMemo } from 'react';
import { useFormActionSignOut } from 'actions/sign-out';

export interface FormSignOutProps extends Omit<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'action' | 'children'> {

}

export default function FormSignOut(props: FormSignOutProps) {
  const {
    errors,
    handleAction,
  } = useFormActionSignOut();

  const formError = useMemo(
    () => (errors?.formErrors?.length > 0 ? errors.formErrors[0] : null),
    [
      errors,
    ],
  );

  return (
    <form
      action={handleAction}
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      <p>
        { 'Are you sure you want to sign out?' }
      </p>
      <FormControl
        className='mt-6'
        error={errors?.fieldErrors?.email?.join(', ')}
      >
        <input
          name='email'
          type='hidden'
          value='example@email.com' // TODO: handle email for sign out
        />
        <Button
          id='sign-out-submit'
          type='submit'
          variantColor='primary'
        >
          { 'Sign Out' }
        </Button>
        { formError ? (
          <Label
            htmlFor='sign-out-submit'
          >
            { formError }
          </Label>
        ) : null }
      </FormControl>
    </form>
  );
}
