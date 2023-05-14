'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({

});

declare module '@mui/material/styles' {
  interface Theme {

  }
  // allow configuration using `createTheme`
  interface ThemeOptions {

  }
}
