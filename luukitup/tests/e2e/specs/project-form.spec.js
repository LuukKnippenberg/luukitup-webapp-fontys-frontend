// https://docs.cypress.io/api/introduction/api.html

let newId;

describe('Project Form Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8080/CMS/Projecten')
  })

  //#region Add, Get, Edit and Delete Project
  it('Should add a new item', () => {   
    cy.get('button[id=add-form-open]').click();
    cy.get('input[id=add-form-title]').type(Cypress.env('test_title'));
    cy.get('input[id=add-form-description]').type(Cypress.env('test_description'));
    cy.get('input[id=add-form-linkToProject]').type(Cypress.env('test_linkToProject'));
    cy.get('input[id=add-form-featured]').check({force: true});
    cy.intercept({
      method: 'POST',
      url: '/Project/Add'
    })
    .as('POST-Response')
    cy.get('button[id=add-form-submit]').click()
    cy.wait('@POST-Response').then((result) => {
      newId = result.response.body.id;
    })
  })

  it('Should see the new item', () => {   
    cy.get('tbody > :nth-child(1) > :nth-child(1)')
    cy.contains(Cypress.env('test_title'))
  })

  it('Should edit the new item', () => {   
    cy.get('button[id=edit-form-open-'+ newId +']').click();
    cy.get('input[id=edit-form-title]').clear();
    cy.get('input[id=edit-form-description]').clear();
    cy.get('input[id=edit-form-title]').type(Cypress.env('test_title_edit'));
    cy.get('input[id=edit-form-description]').type(Cypress.env('test_description_edit'));
    cy.get('button[id=confirm-edit]').click();
  })

  it('Should see the edited item', () => {   
    cy.get('tbody > :nth-child(1) > :nth-child(1)');
    cy.contains(Cypress.env('test_title_edit'));
  })

  it('Should delete the new item', () => {   
    cy.get('button[id=delete-form-open-'+ newId +']').click();
    cy.get('button[id=confirm-delete]').click();
  })

  it('Should not see the new and edited item', () => {   
    cy.get('tbody > :nth-child(1) > :nth-child(1)')
    cy.contains(Cypress.env('test_title_edit')).should('not.exist');
  })
  //#endregion Add, Get, Edit and Delete Project

})