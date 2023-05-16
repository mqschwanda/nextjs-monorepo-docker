describe('@mqs/web', () => {
  describe('Home Page', () => {
    it('should redirect to the home page', () => {
      cy.visit('/');

      cy.url().should('include', '/home');
    });

    it('should render the home page', () => {
      cy.visit('/home');

      cy.get('head title').contains('Home');
      cy.get('span').contains('Home');
    });
  });

  describe('About Page', () => {
    it('should render the about page', () => {
      cy.visit('/about');

      cy.get('head title').contains('About');
      cy.get('span').contains('About');
    });
  });
});

// Prevent TypeScript from reading file as legacy script
export { };
