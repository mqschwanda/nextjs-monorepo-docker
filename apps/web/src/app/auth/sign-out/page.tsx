import {
  Button,
  Card,
  CardBody,
  FormControl,
} from '@mqs/react-server-components';
import signOut from 'actions/sign-out';

export const metadata = {
  title: 'Sign Out',
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
            { 'Sign Out' }
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
              action={signOut}
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
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
