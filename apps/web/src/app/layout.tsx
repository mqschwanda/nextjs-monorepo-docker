import Providers from 'providers';
import type { ReactNode } from 'react';
import '@mqs/react-server-components/styles';
import '@mqs/style/style.css';
import { Metadata } from 'next';
import Footer from 'partials/Footer';
import Nav from 'partials/Nav';

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      data-theme='dark'
      lang='en'
    >
      <body
        className='flex flex-col h-screen'
      >
        <Providers>
          <header
            className='sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 text-primary-content'
          >
            <Nav />
          </header>
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
