import { NextLinkWrapper } from '@mqs/react-client-components';
import {
  Button,
  FormControl,
  InputText,
  Label,
} from '@mqs/react-server-components';
import signUp from 'actions/sign-up';
import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

export interface FormSignUpProps extends Omit<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'action' | 'children'> {

}

export default function FormSignUp(props: FormSignUpProps) {
  return (
    <form
      action={signUp}
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
          type='text'
        />
        <Label
          htmlFor='confirm-password'
        >
          <span
            className='label-text'
          >
            { 'Confirm Password' }
          </span>
        </Label>
        <InputText
          bordered
          id='confirm-password'
          name='confirm-password'
          placeholder='confirm password'
          type='text'
        />
      </FormControl>
      <FormControl
        className='mt-6'
      >
        <Button
          color='primary'
          type='submit'
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
