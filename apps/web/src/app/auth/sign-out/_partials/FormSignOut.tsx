'use client';

import {
  Button,
  FormControl,
} from '@mqs/react-server-components';
import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import { useFormActionSignOut } from 'actions/sign-out';

export interface FormSignOutProps extends Omit<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'action' | 'children'> {

}

export default function FormSignOut(props: FormSignOutProps) {
  const {
    errors,
    handleAction,
  } = useFormActionSignOut();

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
          type='submit'
          variantColor='primary'
        >
          { 'Sign Out' }
        </Button>
      </FormControl>
    </form>
  );
}
