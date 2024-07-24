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

    click_cart() {
        cy.get('li > a[href="/view_cart"]').click()
    }

    subscription_verify() {
        cy.get('.single-widget >h2').scrollIntoView({ duration: 5000 })
        cy.get('.single-widget >h2').should('have.text', 'Subscription')
    }

    subscription_email(email) {
        cy.get('#susbscribe_email').type(email)
        cy.get('#subscribe').click()
        cy.get('#success-subscribe >div').should('have.text', 'You have been successfully subscribed!')
    }

}

export default Website