///<reference types="cypress"/>

describe('US-001 Funcionalida:validar a pagina principal', () => {
  it('A pagina deve estar online', () => {
    cy.visit('/')
    cy.title().should('eq', 'Amazon.com.br | Tudo pra você, de A a Z.')
  })
})