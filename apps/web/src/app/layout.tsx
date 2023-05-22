import Providers from 'providers';
import type { ReactNode } from 'react';
import '@mqs/react-server-components/styles';
import '@mqs/style/style.css';
import { Metadata } from 'next';
import Footer from 'partials/Footer';
import Nav from 'partials/Nav';
import Header from 'partials/Header';
import { IconInfo } from '@mqs/react-server-components';
import { AlertDismissable } from '@mqs/react-client-components';
import { cookies } from 'next/headers';

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  const { value: user } = cookies().get('user') || {};

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
            <Nav
              user={user as any}
            />
            <AlertDismissable
              cx={[
                'my-4',
                'shadow-lg',
              ]}
              variant='info'
            >
              <IconInfo
                className='flex-shrink-0 w-6 h-6'
              />
              <span>{ 'New software update available.' }</span>
            </AlertDismissable>
          </Header>
          <main
            className='flex-grow'
          >
            { children }
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  category: 'technology',
  description: 'MQS Web App',
  // openGraph: {
  //   description: 'MQS Web App',
  //   images: [],
  //   locale: 'en-US',
  //   siteName: '@mqs/web',
  //   title: '@mqs/web',
  //   type: 'website',
  //   url: '',
  // },
  robots: {
    follow: false,
    googleBot: {
      follow: false,
      index: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      noimageindex: true,
    },
    index: false,
    nocache: true,
  },
  themeColor: 'white',
  title: '@mqs/web',
  verification: {
    google: 'google',
    yahoo: 'yahoo',
    yandex: 'yandex',
  },
  viewport: {
    initialScale: 1,
    maximumScale: 1,
    width: 'device-width',
  },
};
