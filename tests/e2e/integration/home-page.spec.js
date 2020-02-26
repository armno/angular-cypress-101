/// <reference types="Cypress" />

describe('Home Page', () => {
  it('should display the app name on the home page', () => {
    cy.visit('/');

    cy.get('.highlight-card').should('contain.text', 'angular-cypress');
  });

  it('should update preview command in the terminal area based on the selected button', () => {
    cy.visit('/');
    cy.get(':nth-child(8) > :nth-child(3)').click();
    cy.get('.terminal').should('contain.text', 'ng add @angular/pwa');
  });
});
