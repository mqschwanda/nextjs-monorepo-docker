import { NextLinkWrapper } from '@mqs/react-client-components';
import {
  Button,
  Card,
  CardBody,
  FormControl,
  InputText,
  Label,
} from '@mqs/react-server-components';
import signUp from 'actions/sign-up';

export const metadata = {
  title: 'Sign Up',
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
            { 'Sign Up' }
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
              action={signUp}
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
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
