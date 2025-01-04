/// <reference types="cypress"/>

describe("Log in", () => {
    it ("The user can log in to the site with valid data", () => {
        cy.visit("https://unsplash.com/");
        cy.viewport(1920, 1080);
        //URL assert (https)
        cy.location('protocol')
        .should('eq', 'https:');
        //Title assert (Beautiful Free Images & Pictures | Unsplash)
        cy.title()
        .should('eq', 'Beautiful Free Images & Pictures | Unsplash') 
        cy.wait(3000); 
        cy.get('.styles-module_consentButton__IDK22').click();//accept all coockees
        //Get, assert and click the Login button
        cy.get('.hVddW > .tHGFe > .LB2m0')
        .should('be.visible')
        .click();
        //Get, type and assert email
        cy.get('input[type="email"]')
        .type('example@gmail.com')
        .should('have.value', 'example@gmail.com');
         //Get, type and assert password
        cy.get('input[type="password"]')
        .type('password1')
        .should('have.value', 'password1');
        //Get, assert and click the Login button
        cy.get('.C4IdB')
        .should('be.visible')
        .click();
        //Assert for error
        cy.contains('Invalid email or password.')
        .should('be.visible');
    })
})