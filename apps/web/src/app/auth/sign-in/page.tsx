import { NextLinkWrapper } from '@mqs/react-client-components';
import {
  Button,
  Card,
  CardBody,
  FormControl,
  InputText,
  Label,
} from '@mqs/react-server-components';
import signIn from 'actions/sign-in';

export const metadata = {
  title: 'Sign In',
};

export default function Page() {
  return (
    <div
      className='hero min-h-screen bg-base-200'
    >
      <div
        className='hero-content flex-col lg:flex-row-reverse'
      >
        <div
          className='text-center lg:text-left'
        >
          <h1
            className='text-5xl font-bold'
          >
            { 'Sign In' }
          </h1>
          <p
            className='py-6'
          >
            { 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.' }
          </p>
        </div>
        <Card
          className='flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'
        >
          <CardBody>
            <form
              action={signIn}
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
                  color='primary'
                  type='submit'
                >
                  { 'Sign In' }
                </Button>
              </FormControl>
              <Label
                htmlFor='dont-have-an-account'
              >
                <NextLinkWrapper
                  href='/auth/sign-up'
                >
                  <a
                    className='label-text-alt link link-hover'
                    href='/auth/sign-up'
                    id='dont-have-an-account'
                  >
                    { 'Don\'t have an account? Sign Up.' }
                  </a>
                </NextLinkWrapper>
              </Label>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
