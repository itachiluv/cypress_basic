import '@4tw/cypress-drag-drop'

class Product {
    clickProduct() {
        cy.get("a[href='/products']").click()
    }

    product_page_verify() {
        cy.title().should('eq', 'Automation Exercise - All Products')
    }

    allProducts_header_verify() {
        cy.get('.features_items>h2').should('have.text', 'All Products')
    }

    allProduct_list_verify(list) {
        cy.get('.features_items > div >div >div >ul').should('have.length', list)
    }

    select_product(product_number) {
        cy.get('a[href="/product_details/' + product_number + '"]').click()
    }


    product_mouser_hover(product_number) {
        cy.get('.overlay-content > a[data-product-id="' + product_number + '"]').
            trigger('mouseover', { force: true }).click({ force: true })

    }

    added_popup_click() {
        cy.get('.modal-footer button').click()
    }

    view_popup_click() {
        cy.get('p> a[href="/view_cart"]').click()
    }



    all_product_details(number) {
        const max_product = number
        const link = 'https://automationexercise.com'

        for (let i = 1; i <= max_product; i++) {

            cy.request('GET', link + '/product_details/' + i)
                .then((response) => {
                    if (response.status == 200) {
                        this.select_product(i)
                        cy.go('back');
                    } else {
                        cy.log("---Not Exist---")
                    }
                })

        }
    }

    searchProduct(productName) {
        cy.get('#search_product').type(productName)
        cy.get('#submit_search').click()
        cy.get('h2.title.text-center').should('have.text', 'Searched Products')
    }

    search_product_matching(searchTerm) {
        cy.get('.single-products p').each(($el) => {
            const product_name = $el.text().toLowerCase()

            if (product_name.includes(searchTerm.toLowerCase())) {
                expect(product_name).to.include(searchTerm.toLowerCase())
            }
            else {
                cy.log(`Non-Matching Product Found:${product_name}`)
            }
        })
    }
}


export default Product