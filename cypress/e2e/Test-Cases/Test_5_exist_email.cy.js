import Website from "../../PageObject/website";
import Login_info from "../../PageObject/login_info";


describe('Test Case 5: Register User with existing email', () => {

    const link = new Website
    const login_page = new Login_info
    it('Verify the Register User with existing email', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        link.setWebsite()

        // 3. Verify that home page is visible successfully
        link.homePage_Verify()

        // 4. Click on 'Signup / Login' button
        link.signUp_login()

        // 5. Verify 'New User Signup!' is visible
        login_page.check_SignUp_visible()

        // 6. Enter name and already registered email address  &  Click 'Signup' button
        cy.fixture('login_automation.json').then((data) => {
            login_page.set_Signup_details(data[0].username, data[0].userEmail)
        })

        // 8. Verify error 'Email Address already exist!' is visible
        cy.get('p[style="color: red;"]').should('have.text', 'Email Address already exist!')
    });
})