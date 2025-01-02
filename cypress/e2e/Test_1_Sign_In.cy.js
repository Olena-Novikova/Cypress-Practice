/// <reference types="cypress"/>
describe("Log in", () => {
    it ("Sign in", () => {
        cy.visit("https://unsplash.com/");
        cy.get('.styles-module_consentButton__IDK22').click();//accept all coockees
        cy.get('.hVddW > .tHGFe > .LB2m0').click();//Click the Login button
        cy.get('input[type="email"]').type('example@gmail.com');
        cy.get('input[type="password"]').type('password');
        cy.get('.C4IdB').click();//Click the Login button
    })
})