'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';

export interface ProviderProps {
  children: ReactNode
}

export function UiProvider({
  children,
}: ProviderProps) {
  return (
    <ThemeProvider
      theme={theme}
    >
      { children }
    </ThemeProvider>
  );
}
