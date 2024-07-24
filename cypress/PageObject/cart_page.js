class Cart_page {

    subscription_verify_cart() {
        cy.get('.single-widget >h2').scrollIntoView({ duration: 2000 })
        cy.get('.single-widget >h2').should('have.text', 'Subscription')
    }

    subscription_email(email) {
        cy.get('#susbscribe_email').type(email)
        cy.get('#subscribe').click()
        cy.get('#success-subscribe >div').should('have.text', 'You have been successfully subscribed!')
    }

    cart_added_verify(product_number, product_name) {
        for (let i = 1; i <= product_number; i++) {
            cy.get('tr >td h4 a[href="/product_details/' + i + '"]').then((result) => {
                expect(product_name[i - 1]).to.include(result.text())
            })
        }
    }

    check_cart_product_details(product_number) {
        let allProduct_details = []

        for (let i = 1; i <= product_number; i++) {
            let product_details = []
            cy.get('tr#product-' + i + ' td').each(($result) => {
                const product_info = $result.text()
                product_details.push(product_info)
            }).then(() => {
                allProduct_details.push(product_details)
            })
        }

        for (let i = 1; i <= product_number; i++) {
            cy.get("tr[id='product-" + i + "'] td[class='cart_price'] p").then((result) => {
                expect(allProduct_details[i - 1][2]).to.include(result.text())
            })
            cy.get('tr#product-' + i + ' td.cart_quantity button').then((result) => {
                expect(allProduct_details[i - 1][3]).to.include(result.text())
            })
            cy.get('tr#product-' + i + ' td.cart_total p').then((result) => {
                expect(allProduct_details[i - 1][4]).to.include(result.text())
            })
        }
    }


    quantity_verify(quantity) {
        cy.get('tr#product-1 td.cart_quantity button').should('have.text', quantity)
    }

}

export default Cart_page