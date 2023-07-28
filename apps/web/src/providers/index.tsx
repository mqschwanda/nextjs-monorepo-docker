'use client';

import { ReactNode, memo } from 'react';
import { ApolloProvider } from '@mqs/graphql-client/provider';
import { UiProvider } from '@mqs/react-client-components';

export interface ProviderProps {
  children: ReactNode
}

function Providers({
  children,
}: ProviderProps) {
  return (
    <ApolloProvider>
      <UiProvider>
        { children }
      </UiProvider>
    </ApolloProvider>
  );
}

export default memo(Providers);
