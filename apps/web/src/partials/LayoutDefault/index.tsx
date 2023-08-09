import { type ReactNode } from 'react';
// import '@mqs/react-server-components/styles';
import '@mqs/style/style.css';
import Footer from 'partials/Footer';
import Nav from 'partials/Nav';
import Header from 'partials/Header';
import Providers from 'providers';
import Alerts from 'partials/Alerts';

interface LayoutDefaultProps {
  children: ReactNode
}

export default function LayoutDefault({
  children,
}: LayoutDefaultProps) {
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
            <Alerts />
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
