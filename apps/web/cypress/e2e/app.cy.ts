describe('Home', () => {
  it('should navigate to the home page', () => {
    cy.visit('http://localhost:3000/');

    cy.url().should('include', '/');

    cy.get('span').contains('Web');
  });
});

// Prevent TypeScript from reading file as legacy script
export { };
