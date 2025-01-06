/// <reference types="cypress"/>

describe('Test_API_GET', () => {

    it("The user can see the list of users on page 2", () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2')
        .then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.body).to.not.be.null;
            expect(response.body.data).to.have.length(6);
        })
    })
})