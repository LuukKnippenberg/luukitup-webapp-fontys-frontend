// https://docs.cypress.io/api/introduction/api.html

describe('API Tests', () => {

  it('Should return a 200 Response', () => {
    cy.request("https://api.luukitup.nl/q/openapi")
  })

})
