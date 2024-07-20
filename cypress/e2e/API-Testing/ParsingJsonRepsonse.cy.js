describe('Parsing Json Response', () => {
    it('Simple method for parsing JSON Respone', () => {
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body[0].id).to.eq(1)
            expect(response.body[0]).has.property('title', "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
        })
    })
    let total_price = 0
    it.only('Parsing Complex JSON response', () => {
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs: { limit: 5 }
        }).then((response) => {
            expect(response.status).to.eq(200)
            response.body.forEach(element => {
                total_price = total_price + element.price

            })
            expect(total_price).to.eq(899.23)
        })
    });
})