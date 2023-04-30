import 'cypress/react';

describe('Check navigation', () => {
  it('change url for pages', () => {
    cy.visit('/');
    cy.visit('/about');
    cy.url().should('include', '/about');
    cy.visit('/form');
    cy.url().should('include', '/form');
    cy.visit('/notExisted');
    cy.contains(/404/);
  });
});
