'use client';

import { NextLinkWrapper } from '@mqs/react-client-components';
import {
  Button,
  FormControl,
  InputText,
  Label,
} from '@mqs/react-server-components';
import { useFormActionSignIn } from 'actions/sign-in';
import { DetailedHTMLProps, FormHTMLAttributes, useMemo } from 'react';

export interface FormSignInProps extends Omit<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'action' | 'children'> {

}

export default function FormSignIn(props: FormSignInProps) {
  const {
    clearFieldErrors,
    errors,
    handleAction,
  } = useFormActionSignIn();

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
      <FormControl
        error={errors?.fieldErrors?.email?.join(', ')}
        htmlFor='email'
        label='Email'
      >
        <InputText
          bordered
          error={!!errors?.fieldErrors?.email?.length}
          id='email'
          name='email'
          onChange={() => clearFieldErrors(['email'])}
          placeholder='email'
          required
          type='text'
        />
      </FormControl>
      <FormControl
        error={errors?.fieldErrors?.password?.join(', ')}
        htmlFor='password'
        label='Password'
      >
        <InputText
          bordered
          error={!!errors?.fieldErrors?.password?.length}
          id='password'
          name='password'
          onChange={() => clearFieldErrors(['password'])}
          placeholder='password'
          required
          type='password'
        />
        <Label
          htmlFor='forgot-password'
        >
          <a
            className='label-text-alt link link-hover'
            href='/auth/forgot-password'
            id='forgot-password'
          >
            { 'Forgot password?' }
          </a>
        </Label>
      </FormControl>
      <FormControl
        className='mt-6'
      >
        <Button
          id='sign-in-submit'
          type='submit'
          variantColor='primary'
        >
          { 'Sign In' }
        </Button>
        { formError ? (
          <Label
            cx={[
              'text-error',
            ]}
            htmlFor='sign-in-submit'
          >
            { formError }
          </Label>
        ) : null }
      </FormControl>
      <Label
        htmlFor='do-not-have-an-account'
      >
        <NextLinkWrapper
          href='/auth/sign-up'
        >
          <a
            className='label-text-alt link link-hover'
            href='/auth/sign-up'
            id='do-not-have-an-account'
          >
            { 'Don\'t have an account? Sign Up.' }
          </a>
        </NextLinkWrapper>
      </Label>
    </form>
  );
}
