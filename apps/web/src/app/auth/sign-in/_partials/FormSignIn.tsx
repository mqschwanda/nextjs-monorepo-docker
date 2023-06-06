import { NextLinkWrapper } from '@mqs/react-client-components';
import {
  Button,
  FormControl,
  InputText,
  Label,
} from '@mqs/react-server-components';
import signIn from 'actions/sign-in';
import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

export interface FormSignInProps extends Omit<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'action' | 'children'> {

}

export default function FormSignIn(props: FormSignInProps) {
  return (
    <form
      action={signIn}
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      <FormControl>
        <Label
          htmlFor='email'
        >
          <span
            className='label-text'
          >
            { 'Email' }
          </span>
        </Label>
        <InputText
          bordered
          id='email'
          name='email'
          placeholder='email'
          required
          type='text'
        />
      </FormControl>
      <FormControl>
        <Label
          htmlFor='password'
        >
          <span
            className='label-text'
          >
            { 'Password' }
          </span>
        </Label>
        <InputText
          bordered
          id='password'
          name='password'
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
          type='submit'
          variantColor='primary'
        >
          { 'Sign In' }
        </Button>
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
