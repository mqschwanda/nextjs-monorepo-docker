import {
  Card,
  CardBody,
} from '@mqs/react-server-components';
import FormSignIn from './_partials/FormSignIn';

export const metadata = {
  title: 'Sign In',
};

export default function Page() {
  return (
    <div
      className='hero'
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
            {
              // cspell:disable
              'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'
              // cspell:enable
            }
          </p>
        </div>
        <Card
          className='flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'
        >
          <CardBody>
            <FormSignIn />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
