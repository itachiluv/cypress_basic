describe('Header and Cookies', () => {

    let authToken = null

    before('Creating Access Token', () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers: { 'Content-type': 'application/json' },
            body: {
                clientName: "ZXCV",
                clientEmail: Math.random().toString(10).substring(3) + "@gmail.com"
            }
        }).then((response) => {
            authToken = response.body.accessToken
        })
    });

    before('Order Book', () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            body: {
                "bookId": 1,
                "customerName": "Vernon"
            }

        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.created).to.equal(true)
        })
    });

    it('Get the Book Order', () => {
        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            cookies: {
                'cookieName': 'mycookie'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).has.length(1)
        })
    });
})

