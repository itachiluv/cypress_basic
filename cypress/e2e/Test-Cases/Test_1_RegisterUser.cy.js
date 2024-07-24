import Website from "../../PageObject/website";
import Login_info from "../../PageObject/login_info";
import SignUp_Form from "../../PageObject/signUp_form";
import delete_user from "../../PageObject/delete_page";

//  npx cypress run --spec cypress\e2e\Test-Cases\*.cy.js ---> overall testcase run in prompt

describe('Automation Exercise', () => {

    const website_info = new Website
    const login_page = new Login_info
    const signUp_page = new SignUp_Form
    const delete_account = new delete_user

    it('Test Case 1 - Register User', () => {

        // Navigate to url 'http://automationexercise.com'
        website_info.setWebsite()

        // Verify that home page is visible successfully
        website_info.homePage_Verify()

        // Click on 'Signup / Login' button
        website_info.signUp_login()

        // Verify 'New User Signup!' is visible
        login_page.check_SignUp_visible()

        // Enter name and email address & Click 'Signup' button
        const randomUsername = 'user_' + Math.random().toString(36).substring(2, 10);
        const randomEmail = 'user_' + Math.random().toString(36).substring(2, 10) + '@gmail.com'
        login_page.set_Signup_details(randomUsername, randomEmail)


        //  Verify that 'ENTER ACCOUNT INFORMATION' is visible
        signUp_page.verify_account_title()

        // Fill details: Title, Name, Email, Password, Date of birth,
        //  Select checkbox 'Sign up for our newsletter!',
        // Select checkbox 'Receive special offers from our partners!'
        signUp_page.user_Information_details()

        // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        // Click 'Create Account button'
        signUp_page.address_details(randomUsername)

        // Verify that 'ACCOUNT CREATED!' is visible
        cy.get('b').should('have.text', 'Account Created!')

        // Click 'Continue' button
        cy.get('[data-qa="continue-button"]').click()

        // Verify that 'Logged in as username' is visible
        cy.get('b').should('have.text', randomUsername)

        // Click 'Delete Account' button
        // cy.get('.shop-menu > .nav > :nth-child(5) > a').click()


        // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        // delete_account.account_delete()
    });
})