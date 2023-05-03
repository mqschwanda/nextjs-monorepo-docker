import { ApolloProvider as Provider } from '@apollo/client';
import type { ReactNode } from 'react';
import client from '../client';

export interface ApolloProviderProps {
  children: ReactNode
}

export function ApolloProvider({
  children,
}: ApolloProviderProps) {
  return (
    <Provider
      client={client}
    >
      { children }
    </Provider>
  );
}
