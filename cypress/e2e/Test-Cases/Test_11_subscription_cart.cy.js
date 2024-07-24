import Website from "../../PageObject/website";
import Cart_page from "../../PageObject/cart_page";


describe('Test Case 11: Verify Subscription in Cart page', () => {
    const link = new Website
    const cart = new Cart_page


    it('Verify Subscription in Cart page', () => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        link.setWebsite()

        // 3. Verify that home page is visible successfully
        link.homePage_Verify()

        // 4. Click 'Cart' button
        link.click_cart()

        // 5. Scroll down to footer
        // 6. Verify text 'SUBSCRIPTION'
        cart.subscription_verify_cart()

        // 7. Enter email address in input and click arrow button
        // 8. Verify success message 'You have been successfully subscribed!' is visible
        cart.subscription_email('test@gmail.com')

    });
})