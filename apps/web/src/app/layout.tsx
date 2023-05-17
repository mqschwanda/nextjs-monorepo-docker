import Providers from 'providers';
import type { ReactNode } from 'react';
import { Container } from '@mqs/react-server-components';
import '@mqs/react-server-components/styles';
import '@mqs/style/style.css';
import { Metadata } from 'next';

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang='en'
    >
      <body>
        <Providers>
          <Container>
            { children }
          </Container>
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  category: 'technology',
  description: 'MQS Web App',
  openGraph: {
    description: 'MQS Web App',
    images: [],
    locale: 'en-US',
    siteName: '@mqs/web',
    title: '@mqs/web',
    type: 'website',
    url: '',
  },
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
