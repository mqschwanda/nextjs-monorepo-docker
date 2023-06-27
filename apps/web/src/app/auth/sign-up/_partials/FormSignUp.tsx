'use client';

import { NextLinkWrapper } from '@mqs/react-client-components';
import {
  Button,
  FormControl,
  InputText,
  Label,
} from '@mqs/react-server-components';
import signUp from 'actions/sign-up/action';
import { Schema } from 'actions/sign-up/validation';
import {
  DetailedHTMLProps,
  FormHTMLAttributes,
} from 'react';
import useFormAction from 'utilities/useFormAction';

export interface FormSignUpProps
  extends Omit<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'action' | 'children'> {

}

export default function FormSignUp(props: FormSignUpProps) {
  const {
    clearErrors,
    errors,
    handleAction,
  } = useFormAction<Schema>({
    action: signUp,
  });

  return (
    <form
      action={handleAction}
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      <FormControl
        error={errors.email}
        htmlFor='email'
        label='Email'
      >
        <InputText
          bordered
          error={!!errors.email}
          id='email'
          name='email'
          onChange={() => clearErrors(['email'])}
          placeholder='email'
          type='text'
        />
      </FormControl>
      <FormControl
        error={errors.password}
        htmlFor='password'
        label='Password'
      >
        <InputText
          bordered
          error={!!errors.password}
          id='password'
          name='password'
          onChange={() => clearErrors(['confirm-password', 'password'])}
          placeholder='password'
          type='text'
        />
      </FormControl>
      <FormControl
        error={errors['confirm-password']}
        htmlFor='confirm-password'
        label='Confirm Password'
      >
        <InputText
          bordered
          error={!!errors['confirm-password']}
          id='confirm-password'
          name='confirm-password'
          onChange={() => clearErrors(['confirm-password', 'password'])}
          placeholder='confirm password'
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
