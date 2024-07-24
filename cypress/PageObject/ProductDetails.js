class Product_details {
    product_detail_page_verify() {
        cy.title().should('eq', 'Automation Exercise - Product Details')
    }

    product_information_verify(name, category, price, availability, condition, brand) {
        cy.get('.product-information>h2').should('have.text', name)
        cy.get('.product-information>p:nth-child(3)').should('have.text', category)
        cy.get('.product-information>span>span').should('have.text', price)
        cy.get('.product-information>p:nth-child(6)').should('contain', availability)
        cy.get('.product-information>p:nth-child(7)').should('contain', condition)
        cy.get('.product-information>p:nth-child(8)').should('contain', brand)
    }

    add_quantity(quantity) {
        cy.get('#quantity').clear().type(quantity)
    }

    click_cart() {
        cy.get("button[type='button']").click()
    }


}

export default Product_details