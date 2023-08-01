/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import { ADMIN_USER, USER } from '@mqs/prisma/dist/seed/constants';
import { aliasQuery } from './utilities/graphql-test-utils';

declare global {
  namespace Cypress {
    interface Chainable {
      aliasGraphQL(): Chainable<void>
      assertSignedInNavAuth(): Chainable<void>
      assertSignedOutNavAuth(): Chainable<void>
      signInAdminUser(options?: {
        screenshot?: boolean
      }): Chainable<void>
      signInUser(options?: {
        screenshot?: boolean
      }): Chainable<void>
      signOutUser(): Chainable<void>
    }
  }
}

Cypress.Commands.add('aliasGraphQL', () => {
  const url = new URL('/graphql/v1', 'http://localhost:3001');
  cy.intercept('POST', url.toString(), (req) => {
    // Queries
    aliasQuery(req, 'Me');

    // Mutations
    // aliasMutation(req, 'Login')
  });
});

Cypress.Commands.add('assertSignedOutNavAuth', () => {
  cy.get('#nav-auth-menu-auth')
    .should('exist');

  cy.get('#nav-auth-menu-profile')
    .should('not.exist');
});

Cypress.Commands.add('assertSignedInNavAuth', () => {
  cy.get('#nav-auth-menu-auth')
    .should('not.exist');

  cy.get('#nav-auth-menu-profile')
    .should('exist');
});

Cypress.Commands.add('signInAdminUser', ({
  screenshot = false,
} = {}) => {
  cy.visit('/auth/sign-in');

  cy.assertSignedOutNavAuth();

  cy.get('#email')
    .type(ADMIN_USER.email);
  cy.get('#password')
    .type(ADMIN_USER.password);

  if (screenshot) {
    cy.screenshot();
  }

  cy.get('button[type="submit"]')
    .click();

  cy.location('pathname', { timeout: 1000 })
    .should('eq', '/home');

  cy.assertSignedInNavAuth();
});

Cypress.Commands.add('signInUser', ({
  screenshot = false,
} = {}) => {
  cy.visit('/auth/sign-in');

  cy.assertSignedOutNavAuth();

  cy.get('#email')
    .type(USER.email);
  cy.get('#password')
    .type(USER.password);

  if (screenshot) {
    cy.screenshot();
  }

  cy.get('button[type="submit"]')
    .click();

  cy.location('pathname', { timeout: 1000 })
    .should('eq', '/home');

  cy.assertSignedInNavAuth();
});

Cypress.Commands.add('signOutUser', () => {
  cy.visit('/auth/sign-out');

  cy.wait('@query Me');

  cy.assertSignedInNavAuth();

  cy.get('button[type="submit"]', { timeout: 1000 })
    .should('be.enabled')
    .click();

  cy.location('pathname', { timeout: 1000 })
    .should('eq', '/home');

  cy.assertSignedOutNavAuth();
});

// Prevent TypeScript from reading file as legacy script
export {};
