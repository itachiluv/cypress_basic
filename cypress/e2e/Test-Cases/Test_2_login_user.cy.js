import Website from "../../PageObject/website";
import Login_info from "../../PageObject/login_info";

describe('Login User with correct email and password', () => {

    const link = new Website
    const login_user = new Login_info
    it('Verify the Login User with correct email and password', () => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        link.setWebsite()

        // 3. Verify that home page is visible successfully
        link.homePage_Verify()

        // 4. Click on 'Signup / Login' button
        link.signUp_login()

        // Verify 'Login to your account' is visible
        login_user.check_login_visible()

        //  Enter correct email address and password
        cy.fixture('login_automation.json').then((data) => {
            login_user.set_login_details(data[0].userEmail, data[0].password)

            // 8. Verify that 'Logged in as username' is visible
            cy.get('b').should('have.text', data[0].username)
        })

        // Click 'Delete Account' button
        // cy.get('.shop-menu > .nav > :nth-child(5) > a').click()


        // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        // delete_account.account_delete()

    });
})