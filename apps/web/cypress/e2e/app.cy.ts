describe('@mqs/web', () => {
  describe('Home Page', () => {
    it('should redirect to the home page', () => {
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
    it('should render the about page', () => {
      cy.visit('/about');

      cy.get('head title').contains('About');
      cy.screenshot();
    });
  });

  describe('auth', () => {
    describe('Sign In Page', () => {
      it('should render the about page', () => {
        cy.visit('/auth/sign-in');

        cy.get('head title').contains('Sign In');
        cy.screenshot();
      });
    });

    describe('Sign Up Page', () => {
      it('should render the about page', () => {
        cy.visit('/auth/sign-up');

        cy.get('head title').contains('Sign Up');
        cy.screenshot();
      });
    });
  });
});

// Prevent TypeScript from reading file as legacy script
export { };
