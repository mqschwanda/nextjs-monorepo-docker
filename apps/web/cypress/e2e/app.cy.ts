import { faker } from '@faker-js/faker';
import { USER } from '@mqs/prisma/dist/seed/constants';

describe('@mqs/web', () => {
  beforeEach(() => {
    cy.aliasGraphQL();
  });

  describe('app', () => {
    describe('about', () => {
      it('should render the page', () => {
        cy.visit('/about');

        cy.get('head title')
          .contains('About');

        cy.screenshot();
      });
    });

    describe('admin', () => {
      it('should render the page for admin user', () => {
        cy.signInAdminUser();

        cy.visit('/admin');

        cy.get('head title')
          .contains('Admin');

        cy.screenshot();

        cy.signOutUser();
      });

      it('should render the not found page for user', () => {
        cy.signInUser();

        cy.visit('/admin', {
          failOnStatusCode: false,
        });

        cy.assertNotFoundPage();

        cy.signOutUser();
      });

      describe('users', () => {
        it('should render the page for admin user', () => {
          cy.signInAdminUser();

          cy.visit('/admin/users');

          cy.get('head title')
            .contains('Users');

          cy.screenshot();

          cy.signOutUser();
        });

        it('should render the not found page for user', () => {
          cy.signInUser();

          cy.visit('/admin/users', {
            failOnStatusCode: false,
          });

          cy.assertNotFoundPage();

          cy.signOutUser();
        });
      });
    });

    describe('auth', () => {
      describe('refresh', () => {
        it('should refresh tokens and redirect', () => {
          cy.signInUser();

          const userProfilePath = '/user/profile';
          cy.visit('/auth/refresh', { qs: { redirect: userProfilePath } });

          cy.location('pathname', { timeout: 5000 })
            .should('eq', userProfilePath);

          cy.signOutUser();
        });
      });

      describe('sign-in', () => {
        it('should render the page', () => {
          cy.visit('/auth/sign-in');

          cy.get('head title')
            .contains('Sign In');

          cy.screenshot();
        });

        it('should fill out and submit the form', () => {
          cy.signInUser({
            screenshot: true,
          });

          cy.signOutUser();
        });

        it('should redirect user based on url search param', () => {
          const userProfilePath = '/user/profile';
          cy.visit('/auth/sign-in', { qs: { redirect: userProfilePath } });

          cy.get('#nav-auth-menu-auth')
            .should('exist');
          cy.get('#nav-auth-menu-profile')
            .should('not.exist');

          cy.get('#email')
            .type(USER.email);
          cy.get('#password')
            .type(USER.password);

          cy.screenshot();

          cy.get('button[type="submit"]')
            .click();
          cy.location('pathname', { timeout: 5000 })
            .should('eq', userProfilePath);

          cy.assertSignedInNavAuth();

          cy.signOutUser();
        });
      });

      describe('sign-out', () => {
        it('should render the page', () => {
          cy.signInUser();

          cy.visit('/auth/sign-out');

          cy.get('head title')
            .contains('Sign Out');

          cy.screenshot();
        });

        it('should submit the form', () => {
          cy.signInUser();

          cy.signOutUser();

          cy.location('pathname', { timeout: 5000 })
            .should('eq', '/home');
        });

        it('should redirect when no user is signed in', () => {
          cy.visit('/auth/sign-out');

          cy.location('pathname', { timeout: 5000 })
            .should('eq', '/home');
        });
      });

      describe('sign-up', () => {
        it('should render the page', () => {
          cy.visit('/auth/sign-up');

          cy.get('head title')
            .contains('Sign Up');

          cy.screenshot();
        });

        it('should fill out and submit the form', () => {
          cy.visit('/auth/sign-up');

          cy.assertSignedOutNavAuth();

          const user = {
            email: faker.internet.email(),
            nameFirst: faker.person.firstName(),
            nameLast: faker.person.lastName(),
            password: faker.internet.password(),
          };

          cy.get('#email')
            .type(user.email);
          cy.get('#nameFirst')
            .type(user.nameFirst);
          cy.get('#nameLast')
            .type(user.nameLast);
          cy.get('#password')
            .type(user.password);
          cy.get('#confirm-password')
            .type(user.password);

          cy.screenshot();

          cy.get('button[type="submit"]')
            .click();
          cy.location('pathname', { timeout: 5000 })
            .should('eq', '/user/profile');

          cy.assertSignedInNavAuth();

          cy.signOutUser();
        });
      });
    });

    describe('home', () => {
      it('should render the page', () => {
        cy.visit('/home');

        cy.get('head title')
          .contains('Home');

        cy.screenshot();
      });

      it('should redirect to the home page', () => {
        cy.visit('/');

        cy.url()
          .should('include', '/home');
      });
    });

    describe('user', () => {
      describe('profile', () => {
        it('should render the page', () => {
          cy.signInUser();

          cy.visit('/user/profile');

          cy.get('head title')
            .contains('User Profile');

          cy.screenshot();

          cy.signOutUser();
        });

        it('should redirect to sign in without user', () => {
          cy.visit('/user/profile');

          const userProfilePath = '/user/profile';
          cy.location('pathname', { timeout: 5000 })
            .should('eq', '/auth/sign-in');
          cy.location('search', { timeout: 5000 })
            .should('include', `redirect=${encodeURIComponent(userProfilePath)}`);
        });
      });
    });

    describe('not-found', () => {
      it('should render page', () => {
        cy.visit('/not/a/path', {
          failOnStatusCode: false,
        });

        cy.assertNotFoundPage();
      });
    });
  });
});

// Prevent TypeScript from reading file as legacy script
export { };
