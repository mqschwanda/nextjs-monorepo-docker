'use client';

import { NextLinkWrapper } from '@mqs/react-client-components';
import {
  Button,
  FormControl,
  InputText,
  Label,
} from '@mqs/react-server-components';
import { useFormActionSignUp } from 'actions/sign-up';
import {
  DetailedHTMLProps,
  FormHTMLAttributes,
} from 'react';

export interface FormSignUpProps
  extends Omit<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'action' | 'children'> {

}

export default function FormSignUp(props: FormSignUpProps) {
  const {
    clearFieldErrors,
    errors,
    handleAction,
  } = useFormActionSignUp();

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
          onChange={() => clearFieldErrors(['confirm-password', 'password'])}
          placeholder='password'
          required
          type='text'
        />
      </FormControl>
      <FormControl
        error={errors?.fieldErrors['confirm-password']?.join(', ')}
        htmlFor='confirm-password'
        label='Confirm Password'
      >
        <InputText
          bordered
          error={!!errors?.fieldErrors['confirm-password']?.length}
          id='confirm-password'
          name='confirm-password'
          onChange={() => clearFieldErrors(['confirm-password', 'password'])}
          placeholder='confirm password'
          required
          type='text'
        />
      </FormControl>
      <FormControl
        className='mt-6'
      >
        <Button
          type='submit'
          variantColor='primary'
        >
          { 'Sign Up' }
        </Button>
      </FormControl>
      <Label
        htmlFor='already-have-account'
      >
        <NextLinkWrapper
          href='/auth/sign-in'
        >
          <a
            className='label-text-alt link link-hover'
            href='/auth/sign-in'
            id='already-have-account'
          >
            { 'Already have an account? Sign In.' }
          </a>
        </NextLinkWrapper>
      </Label>
    </form>
  );
}
