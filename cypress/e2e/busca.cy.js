
///<reference types="cypress"/>

describe('US-002 Funcionalida:Busca de Produto', () => {
  beforeEach(() => {
    cy.visit('/')
  });


  it('deve encontrar o produto pesquisado', () => {
    
    cy.get('input[placeholder="Pesquisa Amazon.com.br"]')
    .type('iphone')
    cy.get('#nav-search-submit-button').click()
    cy.get('.a-section').should('be.visible')
  })



  it('deve mostrar sugestões relevantes ao digitar o produto', () => {
    
    cy.get('input[placeholder="Pesquisa Amazon.com.br"]')
    .type('iphone')
    cy.get(':nth-child(1) > .s-suggestion-container > .s-suggestion')
    
 })



  it('não deve ter resultado de busca', () => {
  
  cy.get('input[placeholder="Pesquisa Amazon.com.br"]')
  .type('12345lklk')
  cy.get('#nav-search-submit-button').click()
  cy.get('.s-no-outline').contains('Nenhum resultado para ')
    })

})