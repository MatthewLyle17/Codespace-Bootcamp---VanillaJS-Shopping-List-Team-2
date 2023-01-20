//Create reusable function to input items to list
Cypress.Commands.add('listInput', (text, number) => {
    //check text box exists and input text
    cy.get('[data-cy=add-item-textbox]').should('exist').type(text).should('have.value', text);
    //check number selector button exists and select 5
    cy.get('[data-cy=number-selector]').should('exist').type(number).should('have.value', number);
    //check submit button exists and click
    cy.get('[data-cy=submit-btn]').should('exist').click();
   })

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })