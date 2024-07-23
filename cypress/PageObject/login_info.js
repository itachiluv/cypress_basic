class Login_info {

    check_page_title() {
        cy.title().should('eq', 'Automation Exercise - Signup / Login')
    }

    check_SignUp_visible() {
        cy.get("div.signup-form >h2").should('have.text', 'New User Signup!')
    }

    check_login_visible() {
        cy.get('div.login-form >h2').should('have.text', 'Login to your account')
    }

    set_Signup_details(username, useremail) {
        cy.get("input[placeholder='Name']").type(username)
        cy.get("input[data-qa='signup-email']").type(useremail)
        cy.get('[data-qa="signup-button"]').click()
    }

    set_login_details(username, password) {
        cy.get("input[data-qa='login-email']").type(username)
        cy.get("input[data-qa='login-password']").type(password)
        cy.get("button[data-qa='login-button']").click()
    }

    set_logout() {
        cy.get('a[href="/logout"]').click()
    }
}

export default Login_info