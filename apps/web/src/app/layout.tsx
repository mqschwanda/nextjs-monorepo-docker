import { type ReactNode } from 'react';
import { Metadata } from 'next';
import LayoutDefault from 'partials/LayoutDefault';

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <LayoutDefault>
      { children }
    </LayoutDefault>
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
