// @ts-nocheck

beforeEach(() => {
  cy.login();
});

describe('Verificação da funionalidade swaglabs', () => {
  it('Adicionar um produto no carrinho', () => {
    cy.addToCar();
  });

  it('Iniciar checkout', () => {
    cy.addToCar();
    cy.initializeCheckcout();
  });

  it('Concluir pedido', () => {
    cy.addToCar();
    cy.initializeCheckcout();
    cy.get('.btn_action').click();
    cy.url().should('include', 'checkout-complete.html');
  });
});
