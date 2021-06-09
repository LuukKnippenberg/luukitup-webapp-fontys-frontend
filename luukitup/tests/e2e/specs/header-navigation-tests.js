// https://docs.cypress.io/api/introduction/api.html

describe('Header Navigation Button Tests', () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/")
  });

  it('Should go to Blog', () => {
    cy.get('a[id=header-nav-button-blog]').click();
    cy.url().should('include', '/Blog')
  })

  it('Should go to Projecten', () => {
    cy.get('a[id=header-nav-button-projecten]').click();
    cy.url().should('include', '/Projecten')
  })

  it('Should go to Over Ons', () => {
    cy.get('a[id=header-nav-button-over-ons]').click();
    cy.url().should('include', '/Over-Ons')
  })

  it('Should go to Contact', () => {
    cy.get('a[id=header-nav-button-contact]').click();
    cy.url().should('include', '/Contact')
  })
})
