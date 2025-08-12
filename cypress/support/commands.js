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

Cypress.Commands.add('loginToTrello', () => { 
      cy.visit("/login")
      cy.wait(3000)
      cy.get('[name=username]').type("amalbutmah376@gmail.com");
      cy.get('#login-submit').click();
      cy.get('#password').type("amal123123@#"+"{enter}");  
      cy.get('#login-submit').click();
      cy.wait(6000)
})

Cypress.Commands.add("findByTestId",(testid)=>{
  cy.get(`[data-testid=${testid}]`)
})