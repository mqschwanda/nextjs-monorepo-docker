import Providers from 'providers';
import type { ReactNode } from 'react';
import { Container } from 'ui';

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

export const metadata = {
  description: 'Welcome to Next.js',
  title: 'Home',
};
