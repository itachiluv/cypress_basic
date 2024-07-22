describe('API chaining using gorest  API', () => {
    const auth_token = 'Bearer a1af4c2de1d0bcf9b0da6476032693264201952275bbe15d99a3fe27ec4ec7e9'
    it('API chaining -> create,update and delete user', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: {
                name: 'Manisankar',
                gender: "male",
                email: Math.random().toString(5).substring(2) + "@gmail.com",
                status: 'active'
            },
            headers: {
                Authorization: auth_token
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            const userId = response.body.id
            // Update Username
            cy.request({
                method: 'PUT',
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                body: {
                    name: 'messi'
                },
                headers: {
                    Authorization: auth_token
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq('messi')

                // Delete USer
                cy.request({
                    method: 'DELETE',
                    url: `https://gorest.co.in/public/v2/users/${userId}`,
                    headers: {
                        Authorization: auth_token
                    }
                }).then((response) => {
                    expect(response.status).to.eq(204)
                })
            })
        })
    });
})