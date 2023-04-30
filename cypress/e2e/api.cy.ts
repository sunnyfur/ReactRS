/// <reference types="cypress" />

describe('Check api', () => {
  it('get status 200', () => {
    cy.request({ method: 'GET', url: 'https://api.jikan.moe/v4/top/anime' }).as('getEntries');
    cy.get('@getEntries').should((response: unknown) => {
      const res = response as Response;
      expect(res.status).to.eq(200);
      expect(res).to.have.property('headers');
      expect(res.body).to.have.property('pagination');
    });
  });
});
