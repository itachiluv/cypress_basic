class Product {
    clickProduct() {
        cy.get("a[href='/products']").click()
    }

    searchProduct(productName) {
        cy.get('#search_product').type(productName)
        cy.get('#submit_search').click()
        cy.get('h2.title.text-center').should('have.text', 'Searched Products')
    }
}


export default Product