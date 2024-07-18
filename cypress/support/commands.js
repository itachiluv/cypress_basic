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

/// <reference types = "Cypress" />

// /<reference types ="Cypress-xpath "/> 



Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
})

// cypress/support/commands.js

// Click Link 
Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
})

// Over write --> Error

// Cypress.Commands.overwriteQuery('contains', (originalFn, subject, filter, text, options = {}) => {
//     if (typeof text === 'object') {
//         options = text;
//         text = filter;
//         filter = undefined;
//     }

//     options.matchCase = false;
//     return originalFn(subject, filter, text, options);
// });


// Login 
Cypress.Commands.add('login', (username, password) => {
    cy.get('#userName').type(username)
    cy.get('#password').type(password)
    cy.get('#login').click()
})