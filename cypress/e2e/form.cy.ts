/// <reference types="cypress" />

describe('Check form page', () => {
  it('check form on valid data', () => {
    cy.visit('/form');
    cy.get('form').within(() => {
      cy.get('input[type="text"]').type('Sample name');
      cy.get('input[type="date"]').type('2020-02-03');
      cy.get('select').select('photo');
      cy.get('input[type="number"]').type('40');
      cy.get('input[type="radio"]').first().check();
      cy.get('input[type="file"]').selectFile('cypress/fixtures/sample.png');
      cy.get('[type="checkbox"]').first().check();
    });
    cy.get('form').submit();
    cy.wait(3010);
    cy.get('img').should('exist');
  });
});
