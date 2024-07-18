class Login {
    setUsername(username) {
        cy.get("input[data-qa='login-email']").type(username)
    }
    setPassword(password) {
        cy.get("input[data-qa='login-password']").type(password);
    }
    setLogin() {
        cy.get("button[data-qa='login-button']").click()
    }

    verifyPage(expectValue) {
        cy.get('b').should('have.text', expectValue)
    }
}



export default Login

