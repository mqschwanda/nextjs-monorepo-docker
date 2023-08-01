import { NextLinkWrapper } from '@mqs/react-client-components';

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
              { 'Page Not Found' }
            </h1>
            <p
              className='py-6'
            >
              { 'Not to worry. You can head over to our' }
              { ' ' }
              <NextLinkWrapper
                href='/home'
              >
                <a
                  className='link link-primary'
                  href='/home'
                >
                  { 'home page' }
                </a>
              </NextLinkWrapper>
              { ' ' }
              { 'to continue navigating the website.' }
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
