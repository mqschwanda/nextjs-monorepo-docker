'use client';

// import '@mqs/react-server-components/styles';
import '@mqs/style/style.css';
import { Button } from '@mqs/react-server-components';
import { Stack } from '@mqs/react-client-components';
import Footer from 'partials/Footer';
import Nav from 'partials/Nav';
import Header from 'partials/Header';
import Providers from 'providers';

function goHome() {
  window.location.replace('/home');
}

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps) {
  return (
    <html
      data-theme='dark'
      lang='en'
    >
      <body
        className='flex flex-col h-screen'
      >
        <Providers>
          <Header>
            <Nav />
          </Header>
          <main
            className='flex-grow'
          >
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
                    { 'Error' }
                  </h1>
                  <p
                    className='pt-6 pb-2'
                  >
                    { error.digest || 'An unexpected error occurred.' }
                  </p>
                  <p
                    className='pt-2 pb-6'
                  >
                    { 'You can try to reset the page to recover from the error, or go navigate to the home page.' }
                  </p>
                  <div>
                    <Stack
                      direction='row'
                      justifyContent='center'
                      spacing={1}
                    >
                      <Button
                        onClick={reset}
                        type='button'
                        variantColor='primary'
                      >
                        { 'Reset' }
                      </Button>
                      <Button
                        onClick={goHome}
                        type='button'
                        variantColor='primary'
                      >
                        { 'Go Home' }
                      </Button>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
