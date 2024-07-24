import Website from "../../PageObject/website";
import Product from "../../PageObject/productPage";

describe('Test Case 9: Search Product', () => {
    const link = new Website
    const product_page = new Product
    const searchTerm = 'Shirt';

    it('Verify that Search Product', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        link.setWebsite()

        // 3. Verify that home page is visible successfully
        link.homePage_Verify()

        // 4. Click on 'Products' button
        product_page.clickProduct()

        // 5. Verify user is navigated to ALL PRODUCTS page successfully
        product_page.product_page_verify()

        // 6. Enter product name in search input and click search button
        // 7. Verify 'SEARCHED PRODUCTS' is visible
        product_page.searchProduct("shirt")

        // 8. Verify all the products related to search are visible
        product_page.search_product_matching(searchTerm)

    });
    // code here
})