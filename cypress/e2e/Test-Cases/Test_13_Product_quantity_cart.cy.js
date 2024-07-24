import Website from "../../PageObject/website";
import Product from "../../PageObject/productPage";
import Product_details from "../../PageObject/ProductDetails";
import Cart_page from "../../PageObject/cart_page";

describe('Test Case 13: Verify Product quantity in Cart', () => {

    const link = new Website
    const product_page = new Product
    const product_detail = new Product_details
    const cart_page = new Cart_page

    it('Verify Product quantity in Cart', () => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        link.setWebsite()

        // 3. Verify that home page is visible successfully
        link.homePage_Verify()

        // 4. Click 'View Product' for any product on home page
        product_page.clickProduct()

        // 5. Verify product detail is opened
        product_page.select_product(1)


        // 6. Increase quantity to 4
        product_detail.add_quantity(5)
        // cy.get('#quantity').clear().type(5)


        // 7. Click 'Add to cart' button
        product_detail.click_cart()

        // 8. Click 'View Cart' button
        product_page.view_popup_click()

        // 9. Verify that product is displayed in cart page with exact quantity
        cart_page.quantity_verify(5)

    });
})