import '@4tw/cypress-drag-drop'
import Website from "../../PageObject/website";




describe('Test Case 10: Verify Subscription in home page', () => {

    const link = new Website

    it('Verify Subscription in home page', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        link.setWebsite()

        // 3. Verify that home page is visible successfully
        link.homePage_Verify()

        // 4. Scroll down to footer
        // 5. Verify text 'SUBSCRIPTION'
        link.subscription_verify()


        // 6. Enter email address in input and click arrow button
        // 7. Verify success message 'You have been successfully subscribed!' is visible
        link.subscription_email('test@gmail.com')


    });
})