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

        cy.signOutUser();
      });
    });

    describe('Sign Out Page', () => {
      it('should render the page', () => {
        cy.signInUser();
        cy.visit('/auth/sign-out');

        cy.get('head title').contains('Sign Out');
        cy.screenshot();
      });

      it('should submit the form', () => {
        cy.signInUser();

        cy.signOutUser();
        cy.location('pathname', { timeout: 1000 }).should('eq', '/home');
      });

      it('should redirect when no user is signed in', () => {
        cy.visit('/auth/sign-out');

        cy.location('pathname', { timeout: 1000 }).should('eq', '/home');
      });
    });

    describe('Sign In Page', () => {
      it('should render the page', () => {
        cy.visit('/auth/sign-in');

        cy.get('head title').contains('Sign In');
        cy.screenshot();
      });

      it('should fill out and submit the form', () => {
        cy.signInUser({
          screenshot: true,
        });
        cy.location('pathname', { timeout: 1000 }).should('eq', '/home');

        cy.get('#nav-auth-menu-auth').should('not.exist');
        cy.get('#nav-auth-menu-profile').should('exist');

        cy.signOutUser();
      });

      it('should redirect user based on url search param', () => {
        const userProfilePath = '/user/profile';
        cy.visit(`/auth/sign-in?redirect=${encodeURIComponent(userProfilePath)}`);

        cy.get('#nav-auth-menu-auth').should('exist');
        cy.get('#nav-auth-menu-profile').should('not.exist');

        cy.get('#email').type(user.email);
        cy.get('#password').type(user.password);

        cy.screenshot();

        cy.get('button[type="submit"]').click();
        cy.location('pathname', { timeout: 1000 }).should('eq', userProfilePath);

        cy.get('#nav-auth-menu-auth').should('not.exist');
        cy.get('#nav-auth-menu-profile').should('exist');

        cy.signOutUser();
      });
    });
  });

  describe('user', () => {
    describe('Profile Page', () => {
      it('should render the page', () => {
        cy.signInUser();
        cy.visit('/user/profile');

        cy.get('head title').contains('User Profile');
        cy.screenshot();

        cy.signOutUser();
      });

      it('should redirect to sign in without user', () => {
        cy.visit('/user/profile');

        const userProfilePath = '/user/profile';
        cy.location('pathname', { timeout: 1000 }).should('eq', '/auth/sign-in');
        cy.location('search', { timeout: 1000 }).should('include', `redirect=${encodeURIComponent(userProfilePath)}`);
      });
    });
  });
});

// Prevent TypeScript from reading file as legacy script
export { };
