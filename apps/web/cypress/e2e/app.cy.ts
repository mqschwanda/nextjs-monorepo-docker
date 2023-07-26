import { faker } from '@faker-js/faker';

describe('@mqs/web', () => {
  describe('Home Page', () => {
    it('should redirect to the page', () => {
      cy.visit('/');

      cy.url().should('include', '/home');
    });

    it('should render the home page', () => {
      cy.visit('/home');

      cy.get('head title').contains('Home');
      cy.screenshot();
    });
  });

  describe('About Page', () => {
    it('should render the page', () => {
      cy.visit('/about');

      cy.get('head title').contains('About');
      cy.screenshot();
    });
  });

  describe('auth', () => {
    const user = {
      email: faker.internet.email(),
      nameFirst: faker.person.firstName(),
      nameLast: faker.person.lastName(),
      password: faker.internet.password(),
    };

    describe('Sign Up Page', () => {
      it('should render the page', () => {
        cy.visit('/auth/sign-up');

        cy.get('head title').contains('Sign Up');
        cy.screenshot();
      });

      it('should fill out and submit the form', () => {
        cy.visit('/auth/sign-up');

        cy.get('#nav-auth-menu-auth').should('exist');
        cy.get('#nav-auth-menu-profile').should('not.exist');

        cy.get('#email').type(user.email);
        cy.get('#nameFirst').type(user.nameFirst);
        cy.get('#nameLast').type(user.nameLast);
        cy.get('#password').type(user.password);
        cy.get('#confirm-password').type(user.password);

        cy.screenshot();

        cy.get('button[type="submit"]').click();
        cy.location('pathname', { timeout: 1000 }).should('eq', '/user/profile');

        cy.get('#nav-auth-menu-auth').should('not.exist');
        cy.get('#nav-auth-menu-profile').should('exist');
      });
    });

    describe('Sign In Page', () => {
      it('should render the page', () => {
        cy.visit('/auth/sign-in');

        cy.get('head title').contains('Sign In');
        cy.screenshot();
      });

      it('should fill out and submit the form', () => {
        cy.visit('/auth/sign-in');

        cy.get('#nav-auth-menu-auth').should('exist');
        cy.get('#nav-auth-menu-profile').should('not.exist');

        cy.get('#email').type(user.email);
        cy.get('#password').type(user.password);

        cy.screenshot();

        cy.get('button[type="submit"]').click();
        cy.location('pathname', { timeout: 1000 }).should('eq', '/user/profile');

        cy.get('#nav-auth-menu-auth').should('not.exist');
        cy.get('#nav-auth-menu-profile').should('exist');
      });
    });
  });
});

// Prevent TypeScript from reading file as legacy script
export { };
