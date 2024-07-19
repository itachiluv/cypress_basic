describe('Http Requests', () => {
    it('Verify Api status', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
            .its('status').should('equal', 200)
    });


    it('verify the Post status', () => {
        cy.request(
            {
                method: "POST",
                url: "https://jsonplaceholder.typicode.com/posts/",
                body: {
                    userId: 10,
                    title: "Test in API",
                    body: "API Testing"
                }
            }
        ).its('status').should('equal', 201)
    })

    it('Verify the PUT status', () => {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                userId: 10,
                title: "Test in API Update using PUT call",
                body: "API Testing using PUT call",
                id: 101
            }
        }).its('status').should('equal', 200)
    });

    it('Verify the Delete Status', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        }).its('status').should('equal', 200)
    })
})