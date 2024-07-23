class Website {
    setWebsite() {
        cy.visit('http://automationexercise.com/')
    }

    homePage_Verify() {
        cy.title().should('eq', 'Automation Exercise')
    }

    signUp_login() {
        cy.get("a[href='/login']").click()
    }

}

export default Website