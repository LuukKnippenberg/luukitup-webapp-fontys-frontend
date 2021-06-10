// https://docs.cypress.io/api/introduction/api.html

let newId;
const newTitle = "Nieuwe Titel";

describe('API Tests', () => {

  it('Should return a 200 Response', () => {
    cy.request("https://api.luukitup.nl/q/openapi")
  })

  //#region Add, Get, Edit and Delete Project
  it('Should add a new item', () => {   
    cy.request('POST', 'https://api.luukitup.nl/Project/Add',{ description: "De omschrijving", featured: false, featuredImageUrl: "https://luukitup.nl", linkToProject: "https://luukitup.nl", title: "Luuk IT up" })
    .its('body').then((body) => {
      newId = body.id;
    })
  })

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

})