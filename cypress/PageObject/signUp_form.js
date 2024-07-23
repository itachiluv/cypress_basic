class SignUp_Form {

    verify_account_title() {
        cy.get("div.login-form > h2 > b").should('have.text', 'Enter Account Information')
    }



    // Fill details: Title, Name, Email, Password, Date of birth
    user_Information_details() {
        cy.get('#id_gender1').check()
        cy.get('#password').type('Test1234!')
        cy.get('#days').select('25')
        cy.get('#months').select('June')
        cy.get('#years').select('1999')

        //  Select checkbox 'Sign up for our newsletter!'
        cy.get('#newsletter').check()

        // Select checkbox 'Receive special offers from our partners!'
        cy.get('#optin').check()
    }

    // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    address_details(username) {
        cy.get('#first_name').type(username)
        cy.get('#last_name').type('test')
        cy.get('#company').type('Test Company')
        cy.get('#address1').type('Test Address 1')
        cy.get('#address2').type('Test Address 2')
        cy.get('#country').select('India')
        cy.get('#state').type('Test State')
        cy.get('#city').type('Test City')
        cy.get('#zipcode').type(123456)
        cy.get('#mobile_number').type('123456789')

        // Click 'Create Account button'
        cy.get('button[data-qa="create-account"]').click()
    }

}

export default SignUp_Form