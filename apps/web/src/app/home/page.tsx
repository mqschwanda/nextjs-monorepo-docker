import { NextLinkWrapper } from '@mqs/react-client-components';

export const metadata = {
  title: 'Home',
};

export default function Page() {
  return (
    <div>
      <div
        className='hero bg-base-200'
      >
        <div
          className='hero-content text-center'
        >
          <div
            className='max-w-md'
          >
            <h1
              className='text-5xl font-bold'
            >
              { 'Home' }
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
            <NextLinkWrapper
              href='/about'
            >
              <a
                className='btn btn-primary'
                href='/about'
                type='button'
              >
                { 'About' }
              </a>
            </NextLinkWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
