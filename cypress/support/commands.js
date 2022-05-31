Cypress.Commands.add('HomePage', () => {
  cy.visit(Cypress.config('http://localhost:3000/'))
})
