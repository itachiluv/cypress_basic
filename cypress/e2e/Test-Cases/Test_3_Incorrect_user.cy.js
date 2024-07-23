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

        // 5.Verify 'Login to your account' is visible
        login_user.check_login_visible()

        // 6. Enter incorrect email address and password using fixtures -> login_automation.json
        // 7. Click 'login' button
        cy.fixture('login_automation.json').then((data) => {
            login_user.set_login_details(data[1].userEmail, data[1].password)
        })
        // 8. Verify error 'Your email or password is incorrect!' is visible
        cy.get('p[style="color: red;"]').should('have.text', 'Your email or password is incorrect!')

    });
})