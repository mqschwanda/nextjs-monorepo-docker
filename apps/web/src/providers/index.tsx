'use client';

import { ReactNode, memo } from 'react';
import { ApolloProvider } from '@mqs/graphql-client/provider';
import { UiProvider } from '@mqs/react-client-components';

function apolloFetch(input: RequestInfo | URL, init?: RequestInit) {
  return fetch(input, {
    ...init,
    credentials: 'include',
  });
}

export interface ProviderProps {
  children: ReactNode
}

function Providers({
  children,
}: ProviderProps) {
  return (
    <ApolloProvider
      fetch={apolloFetch}
    >
      <UiProvider>
        { children }
      </UiProvider>
    </ApolloProvider>
  );
}

export default memo(Providers);
