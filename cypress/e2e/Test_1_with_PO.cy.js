import Login from './PageObject/PO_LogIn.cy'

describe("Log in", () => {

    const login = new Login()

    it ("The user can log in to the site with valid data", () => {
        cy.visit("https://unsplash.com/");
        cy.viewport(1920, 1080);
        // Assert URL protocol (https)
        cy.location('protocol')
        .should('eq', 'https:');
        // Assert page title (Beautiful Free Images & Pictures | Unsplash)
        cy.title()
        .should('eq', 'Beautiful Free Images & Pictures | Unsplash') 
        // Accept all coockees
        cy.get('.styles-module_consentButton__IDK22', { timeout: 3000 }).click();
        //Get, assert and click the Login button
        login.btnLogin()
        .should('be.visible')
        .click();
        //Get, type and assert email
        login.email()
        .type('example@gmail.com')
        .should('have.value', 'example@gmail.com');
         //Get, type and assert password
        login.password()
        .type('password1')
        .should('have.value', 'password1');
        //Get, assert and click the Login button
        login.clickbtnLogin()
        .should('be.visible')
        .click();
        // Assert error message
        cy.contains('Invalid email or password.')
        .should('be.visible');
    })
})