
///<reference types="cypress"/>


describe('US-003 Funcionalida: Validar Carrinho de Compras', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Produto deve estar no carrinho', () => {
    
    cy.get('input[placeholder="Pesquisa Amazon.com.br"]')
      .type('Umidificador de ar')
      cy.get('#nav-search-submit-button').click()
      cy.get('.a-size-base-plus.a-color-base.a-text-normal')
      cy.contains('Umidificador de Ar Difusor Aromatizador de Ambiente Aromas e Óleo Essencial Portátil Ultrassonico USB LED Mini Purificador 220 ml Aromaterapia (ROSA)')
      .click()
      cy.get('#add-to-cart-button').click()
  })

  it('O carrinho deve ficar vazio', () => {
    
    cy.get('input[placeholder="Pesquisa Amazon.com.br"]')
    .type('Umidificador de ar')
    cy.get('#nav-search-submit-button').click()
    cy.get('.a-size-base-plus.a-color-base.a-text-normal')
      cy.contains('Umidificador de Ar Difusor Aromatizador de Ambiente Aromas e Óleo Essencial Portátil Ultrassonico USB LED Mini Purificador 220 ml Aromaterapia (ROSA)')
      .click()
    cy.get('#add-to-cart-button').click()
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
      cy.get('#a-autoid-0-announce').click()
      cy.get('#quantity_2').click()
      cy.contains('Subtotal (2 produtos):') .should('be.visible')
    })
  
  it('Produto deve estar no carrinho', () => {
   
    cy.get('input[placeholder="Pesquisa Amazon.com.br"]')
      .type('Umidificador de ar')
    cy.get('#nav-search-submit-button').click()
    cy.get('.a-size-base-plus.a-color-base.a-text-normal')
      cy.contains('Umidificador de Ar Difusor Aromatizador de Ambiente Aromas e Óleo Essencial Portátil Ultrassonico USB LED Mini Purificador 220 ml Aromaterapia (ROSA)')
      .click()
    cy.get('#add-to-cart-button').click()
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
    cy.get('#a-autoid-0-announce').click()
    cy.get('#quantity_2').click()
    cy.contains('Subtotal (2 produtos):').should('be.visible')
    cy.get('.sc-action-delete > .a-declarative > .a-color-link').click()
    cy.contains('Seu carrinho de compras da Amazon está vazio.') .should('be.visible')
  })

})