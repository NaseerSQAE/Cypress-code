describe('Automated testing for https://k2x.tech/', () => {
  beforeEach(() => {
    // Visit the website before each test
    cy.visit('https://k2x.tech/')
  })

  it('Should navigate to a specific path and interact with elements', () => {
    // Navigate to a specific path (e.g., "/features")
    cy.visit('https://k2x.tech/features')

    // Assert that the current URL matches the expected path
    cy.url().should('include', '/features')

    // Interact with specific elements using CSS selectors
    cy.get('.nav-link').contains('About').click()

    // Assert that the page has navigated to the About section
    cy.url().should('include', '/about')

    // Interact with another element
    cy.get('.cta-button').click()

    // Assert that the Contact form is visible
    cy.get('.contact-form').should('be.visible')
  })
})
