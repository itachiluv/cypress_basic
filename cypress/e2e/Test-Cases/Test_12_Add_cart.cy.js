import Website from "../../PageObject/website";
import Product from "../../PageObject/productPage";
import Cart_page from "../../PageObject/cart_page";

describe('Test Case 12: Add Products in Cart', () => {

    const link = new Website
    const product_page = new Product
    const cart_page = new Cart_page
    it('Verify that Add Products in Cart', () => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        link.setWebsite()

        // 3. Verify that home page is visible successfully
        link.homePage_Verify()

        // 4. Click 'Products' button
        product_page.clickProduct()

        // Using Loop to add cart 
        const product_number = 3
        let product_name = []

        // this product_name[] contain all product name for step 9 to assertion
        cy.get('.overlay-content p').each(($el) => {
            const product_names = $el.text()
            product_name.push(product_names)
        })

        for (let i = 1; i <= product_number; i++) {
            if (i == product_number) {
                // 7. Hover over second product and click 'Add to cart'
                // 8. Click 'View Cart' button
                product_page.product_mouser_hover(i)
                product_page.view_popup_click()

            } else {
                // 5. Hover over first product and click 'Add to cart'
                // 6. Click 'Continue Shopping' button
                product_page.product_mouser_hover(i)
                product_page.added_popup_click()
            }

        }
        // 9. Verify both products are added to Cart
        cart_page.cart_added_verify(product_number, product_name)

        // 10. Verify their prices, quantity and total price
        // check Price
        cart_page.check_cart_product_details(product_number)

    });
})