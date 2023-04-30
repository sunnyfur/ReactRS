/// <reference types="cypress" />

describe('Check main page', () => {
  it('load cards', () => {
    cy.visit('/');
    cy.get('[data-test-id="card"]').should('exist');
    cy.get('[data-test-id="card"]').should('have.length.at.least', 2);
  });
  it('card click and display more information', () => {
    cy.visit('/');
    cy.get('[data-test-id="card"]').first().click();
    cy.get('[data-test-id="cardFull"]').should('exist');
  });
  it('search cards', () => {
    cy.visit('/');
    cy.get('input').type('Bleach{enter}');
    cy.get('[data-test-id="card"]').contains(/Bleach/);
  });
});
