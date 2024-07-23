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

        // 5. Verify 'Login to your account' is visible
        login_user.check_login_visible()

        // 6. Enter correct email address and password and Click Login button
        cy.fixture('login_automation.json').then((data) => {
            login_user.set_login_details(data[0].userEmail, data[0].password)

            // 8. Verify that 'Logged in as username' is visible
            cy.get('b').should('have.text', data[0].username)
        })

        // 9. Click 'Logout' button
        login_user.set_logout()

        // 10. Verify that user is navigated to login page
        login_user.check_page_title()

    });
})