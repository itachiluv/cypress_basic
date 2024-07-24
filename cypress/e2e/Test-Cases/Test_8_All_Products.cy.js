import Website from "../../PageObject/website";
import Product from "../../PageObject/productPage";
import Product_details from "../../PageObject/ProductDetails";

describe('Test Case 8: Verify All Products and product detail page', () => {
    const link = new Website
    const products_page = new Product
    const product_detail = new Product_details


    it('Verify that All Products and product detail page', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        link.setWebsite()

        // 3. Verify that home page is visible successfully
        link.homePage_Verify()

        // 4. Click on 'Products' button
        products_page.clickProduct()

        // 5. Verify user is navigated to ALL PRODUCTS page successfully
        products_page.product_page_verify()

        // All Products list view and back


        // 6. The products list is visible
        products_page.allProduct_list_verify(34)

        // Check ALl Product details :
        // products_page.all_product_details(10)



        // 7. Click on 'View Product' of first product
        products_page.select_product(1)

        // 8. User is landed to product detail page
        product_detail.product_detail_page_verify()


        // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
        product_detail.product_information_verify(
            'Blue Top', 'Category: Women > Tops', 'Rs. 500', ' In Stock', ' New', ' Polo')
    });
})