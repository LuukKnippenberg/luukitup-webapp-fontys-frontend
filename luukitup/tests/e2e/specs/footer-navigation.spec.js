// https://docs.cypress.io/api/introduction/api.html

describe('Footer Navigation Button Tests', () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/")
  });

  it('Should go to Home', () => {
    cy.get('a[id=footer-nav-button-home]').click();
    cy.url().should('include', '/')
  })

  it('Should go to Blog', () => {
    cy.get('a[id=footer-nav-button-blog]').click();
    cy.url().should('include', '/Blog')
  })

  it('Should go to Projecten', () => {
    cy.get('a[id=footer-nav-button-projecten]').click();
    cy.url().should('include', '/Projecten')
  })

  it('Should go to Over Ons', () => {
    cy.get('a[id=footer-nav-button-over-ons]').click();
    cy.url().should('include', '/Over-Ons')
  })

  it('Should go to Contact', () => {
    cy.get('a[id=footer-nav-button-contact]').click();
    cy.url().should('include', '/Contact')
  })
})
