import {
  Button,
  FormControl,
} from '@mqs/react-server-components';
import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

import signOut from 'actions/sign-out';

export interface FormSignOutProps extends Omit<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'action' | 'children'> {

}

export const metadata = {
  title: 'Sign Out',
};

export default function FormSignOut(props: FormSignOutProps) {
  return (
    <form
      action={signOut}
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      <p>
        { 'Are you sure you want to sign out?' }
      </p>
      <FormControl
        className='mt-6'
      >
        <Button
          color='primary'
          type='submit'
        >
          { 'Sign Out' }
        </Button>
      </FormControl>
    </form>
  );
}
