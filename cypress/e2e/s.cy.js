// cypress/integration/signin_spec.js
describe('Sign-In Test', () => {
    it('should sign in successfully', () => {
      // Visit the sign-in page
      cy.visit('http://34.242.225.194:5000/signin/ao');
      cy.get('#email').type('asifbangash332@gmail.com');
      cy.get('#password').type('Test@123');
      
      cy.get('.px-1').click();
      cy.get('.block.lg\\:hidden.text-xl').click({ multiple: true })
});
  });
  