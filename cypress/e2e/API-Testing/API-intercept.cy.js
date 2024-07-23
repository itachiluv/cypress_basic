describe('API - Intercept', () => {
    it('Simple API - Intercept', () => {
        cy.visit('https://dummyapi.io/explorer')
        cy.intercept({
            path: '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'
        }).as('comments')
        cy.get('.flex > :nth-child(5)').click()
        cy.wait('@comments').then(intercept => {
            expect(intercept.response.body.limit).equal(10)
            expect(intercept.response.statusCode).equal(200)
            expect(intercept.response.body.total).equal(2)

        })
    })

    it('Mock API', () => {
        cy.visit('https://dummyapi.io/explorer')
        cy.intercept('GET', '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',
            { limit: 10, Name: 'Testing' }).as('comments')
        cy.get('.flex > :nth-child(5)').click()
        cy.wait('@comments').then(intercept => {
            expect(intercept.response.body.limit).equal(10)
            expect(intercept.response.body.Name).equal('Testing')


        })
    });

    it.only('Mock API', () => {
        cy.visit('https://dummyapi.io/explorer')
        cy.intercept('GET', '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',
            { fixture: 'mock-api.json' }).as('comments')
        cy.get('.flex > :nth-child(5)').click()
        cy.wait('@comments').then(intercept => {
            expect(intercept.response.body.limit).equal(10)
            expect(intercept.response.body.Name).equal('Testing')


        })
    });
})