
///<reference types="cypress"/>


describe('US-003 Funcionalida: Validar Carrinho de Compras', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Produto deve estar no carrinho', () => {

    cy.get('input[placeholder="Pesquisa Amazon.com.br"]')
      .type('Kérastase Óleo Elixi')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-asin="B07GWS4BSJ"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus')
      .click()
    cy.get('#add-to-cart-button').click()
    cy.get('.a-size-medium-plus')
  })

  it('A quantidade de produto deve ser alterada', () => {

    cy.get('input[placeholder="Pesquisa Amazon.com.br"]')
      .type('Kérastase Óleo Elixi')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-asin="B07GWS4BSJ"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus')
      .click()
    cy.get('#add-to-cart-button').click()
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
    cy.get('#a-autoid-0-announce').click()
    cy.get('#quantity_2').click()
    cy.contains('Subtotal (2 produtos):').should('be.visible')
  })

  it('O carrinho deve ficar vazio', () => {

    cy.get('input[placeholder="Pesquisa Amazon.com.br"]')
      .type('Kérastase Óleo Elixi')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-asin="B07GWS4BSJ"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus')
      .click()
    cy.get('#add-to-cart-button').click()
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
    cy.get('.sc-action-delete > .a-declarative > .a-color-link').click()
    cy.contains('Seu carrinho de compras da Amazon está vazio.').should('be.visible')

  })

})