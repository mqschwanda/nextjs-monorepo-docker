import Providers from 'providers';
import type { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: RootLayoutProps) {
  return (
    <html
      lang='en'
    >
      <body>
        <Providers>
          { children }
        </Providers>
      </body>
    </html>
  );
}

export const metadata = {
  description: 'Welcome to Next.js',
  title: 'Home',
};
