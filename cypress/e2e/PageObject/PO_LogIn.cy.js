class Login{
    btnLogin(){
        return cy.get('.hVddW > .tHGFe > .LB2m0')
    }
    email(){
        return cy.get('input[type="email"]')
    }
    password(){
       return cy.get('input[type="password"]')
    }
    clickbtnLogin(){
        return cy.get('.C4IdB')
    }
}
export default Login