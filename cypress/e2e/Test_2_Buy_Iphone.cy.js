/// <reference types="cypress"/>

describe("Buy Iphone on the mall.cz", () => {
    it('Buy', () =>{
        cy.visit("https://www.mall.cz/");
         //Click the Souhlasim button
        cy.get('.legal-consent__buttons-wrapper > :nth-child(1) > [data-testid="rounded-button"]').click();
        cy.get('#site-search-input').type('iphone 12');
        //Click the search button
        cy.get('.site-search__input-wrapper > .site-search__action-buttons > #search-button').click();
        cy.get('#l-exponea-close > .l-exponea-close-cross').click();
          //Click the iPhone 12
        cy.get('[data-scroll-id="2719431"] > .pbcrw__top > .pbcrw__basic-info > .pbcrw__title-wrap > .pbcrw__title').click();
        cy.wait(3000); 
        cy.get('#l-exponea-close > .l-exponea-close-cross').click();
        cy.wait(5000); 
        cy.get('#exponea-close').click();
        cy.get('.info-box__buy-buttons__button-wrapper > :nth-child(1) > .add-to-cart-wrapper > :nth-child(2) > [data-testid="rounded-button"]').click();
        //Click přidat do košíku button
        cy.get('.cross-sell__button__to-cart__to').click();
    } )
})