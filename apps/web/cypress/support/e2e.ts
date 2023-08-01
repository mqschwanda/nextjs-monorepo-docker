// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands';

Cypress.on('uncaught:exception', (error) => {
  const { message } = error;
  const NEXT_NON_ERRORS = [
    'NEXT_REDIRECT',
    'NEXT_NOT_FOUND',
  ];

  if (
    message
    && NEXT_NON_ERRORS.some((key) => message.includes(key))) {
    return false;
  }

  return true;
});
