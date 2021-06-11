// https://docs.cypress.io/api/introduction/api.html

let newId;
const newTitle = "Nieuwe Titel";

describe('Project Form Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8080/CMS/Projecten')
  })

  //#region Add, Get, Edit and Delete Project
  it('Should add a new item', () => {   
    cy.get('button[id=add-form-open]').click();
    cy.get('input[id=add-form-title]').type(Cypress.env('test_title'))
    cy.get('input[id=add-form-description]').type(Cypress.env('test_description'))
    cy.get('input[id=add-form-linkToProject]').type(Cypress.env('test_linkToProject'))
    cy.get('input[id=add-form-featured]').check({force: true})
    cy.get('button[id=add-form-submit]').click()
  })

  /*
  it('Should verify the new item exists exists', () => {
    cy.request('https://api.luukitup.nl/Project/' + newId).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('description', 'De omschrijving') 
      expect(response.body).to.have.property('featured', false) 
      expect(response.body).to.have.property('featuredImageUrl', 'https://luukitup.nl') 
      expect(response.body).to.have.property('linkToProject', 'https://luukitup.nl') 
      expect(response.body).to.have.property('title', 'Luuk IT up') 
    })
  })

  it('Should edit the new item', () => {   
    cy.request('PUT', 'https://api.luukitup.nl/Project/Edit',{ description: "De omschrijving", featured: false, featuredImageUrl: "https://luukitup.nl", id: newId, linkToProject: "https://luukitup.nl", title: newTitle })
  })

  it('Should verify the edited item has a new title: '+ newTitle +'', () => {
    cy.request('https://api.luukitup.nl/Project/' + newId).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('title', newTitle) 
    })
  })

  it('Should delete the newly added item', () => {
    cy.request('DELETE', 'https://api.luukitup.nl/Project/Delete/' + newId).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Should verify the item was deleted', () => {
    cy.request({url: 'https://api.luukitup.nl/Project/' + newId, failOnStatusCode: false}).then((response) => {
      expect(response.status).to.eq(204)
    })
  })
  //#endregion Add, Get, Edit and Delete Project
  */

})