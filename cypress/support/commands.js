// @ts-nocheck
Cypress.Commands.add('login', () => {
  const username = Cypress.env('SWAG_USERNAME');
  const password = Cypress.env('SWAG_PASSWORD');

  cy.visit('https://www.saucedemo.com/v1/index.html');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('#login-button').click();
  cy.url().should('include', 'inventory.html');
});

Cypress.Commands.add('addToCar', () => {
  cy.get(':nth-child(1) > .pricebar > .btn_primary').should('be.visible');
  cy.get(':nth-child(1) > .pricebar > .btn_primary').click();

  if (cy.get('.fa-layers-counter').should('be.visible')) {
    cy.log('Foi adicionado no carrinho');
    cy.get('.shopping_cart_container').click();
    cy.url().should('include', 'cart.html');
  } else {
    cy.alert(
      'Houve algum erro, o produto não aparenta ter sido adicionado no carrinho'
    );
  }
});

Cypress.Commands.add('initializeCheckcout', () => {
  cy.get('.btn_action').click();
  cy.get('[data-test="firstName"]').type('Lucas');
  cy.get('[data-test="lastName"]').type('Yoshio');
  cy.get('[data-test="postalCode"]').type('06704-335');
  cy.get('.btn_primary').click();
  cy.url().should('include', 'checkout-step-two.html');
});
