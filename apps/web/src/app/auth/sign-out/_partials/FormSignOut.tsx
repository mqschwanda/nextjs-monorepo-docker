'use client';

import {
  Button,
  FormControl,
  Label,
} from '@mqs/react-server-components';
import {
  DetailedHTMLProps, FormHTMLAttributes, useEffect, useMemo,
} from 'react';
import { useFormActionSignOut } from 'actions/sign-out';
import { useMeQuery } from '@mqs/graphql-client';
import { useRouter } from 'next/navigation';

export interface FormSignOutProps extends Omit<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'action' | 'children'> {

}

export default function FormSignOut(props: FormSignOutProps) {
  const {
    errors,
    handleAction,
  } = useFormActionSignOut();

  const router = useRouter();

  const { data, loading } = useMeQuery();

  const formError = useMemo(
    () => (errors?.formErrors?.length > 0 ? errors.formErrors[0] : null),
    [
      errors,
    ],
  );

  useEffect(
    () => {
      if (!loading && !data?.me) {
        router.push('/');
      }
    },
    [
      loading,
      data,
      router,
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
          value={data?.me?.email}
        />
        <Button
          disabled={loading || !data?.me}
          id='sign-out-submit'
          type='submit'
          variantColor='primary'
        >
          { 'Sign Out' }
        </Button>
        { formError ? (
          <Label
            cx={[
              'text-error',
            ]}
            htmlFor='sign-out-submit'
          >
            { formError }
          </Label>
        ) : null }
      </FormControl>
    </form>
  );
}
