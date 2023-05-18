/* eslint-disable global-require */

import { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    '../../packages/**/*.{js,ts,jsx,tsx}',
    '../../apps/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      'light',
      'dark',
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
  },
};

export { };
module.exports = config;
