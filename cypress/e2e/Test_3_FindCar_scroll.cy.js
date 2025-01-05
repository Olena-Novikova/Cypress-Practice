/// <reference types="cypress"/>

describe('Scroll & Enter', ()=> {

    it('Scroll to car', ()=> {
        cy.visit("https://unsplash.com/");
         // Accept all coockees
         cy.get('.styles-module_consentButton__IDK22', { timeout: 3000 }).click();

         cy.get('[data-testid="nav-bar-search-form-input"]')
         .type('car {enter}');

         cy.get('h1').contains('Car')
         .should('have.text', 'Car')
         .should('be.visible')

         cy.scrollTo(0, 2000)
         cy.get('[data-masonryposition="17"] > .gFPnk > :nth-child(1) > .vthK5 > .gr86h > .mG0SP > .xH5KD > [data-testid="photo-grid-masonry-img"]')
         .click()


    })
})