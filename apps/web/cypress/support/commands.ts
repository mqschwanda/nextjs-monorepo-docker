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

declare global {
  namespace Cypress {
    interface Chainable {
      signInUser(options?: {
        screenshot?: boolean
      }): Chainable<void>
      signOutUser(): Chainable<void>
    }
  }
}

Cypress.Commands.add('signInUser', ({
  screenshot = false,
} = {}) => {
  cy.visit('/auth/sign-in');

  cy.get('#nav-auth-menu-auth').should('exist');
  cy.get('#nav-auth-menu-profile').should('not.exist');

  cy.get('#email').type('admin@email.com');
  cy.get('#password').type('password');

  if (screenshot) {
    cy.screenshot();
  }

  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('signOutUser', () => {
  cy.visit('/auth/sign-out');
  cy.get('button[type="submit"]').click();

  cy.location('pathname', { timeout: 1000 }).should('eq', '/home');

  // TODO: figure out why reload is needed to update ui because this currently works in development
  cy.reload();

  cy.get('#nav-auth-menu-auth').should('exist');
  cy.get('#nav-auth-menu-profile').should('not.exist');
});

// Prevent TypeScript from reading file as legacy script
export {};
