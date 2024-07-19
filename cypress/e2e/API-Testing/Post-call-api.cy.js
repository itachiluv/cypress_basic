describe('Post Calls', () => {
    it('Method 1 ', () => {
        const req_body = {
            name: "Apple MacBook Pro 16",
            data: {
                year: 2019,
                price: 1849.99,
                CPUmodel: "Intel Core i9",
                Hard_disk_size: "1 TB"
            }
        }

        cy.request(
            {
                method: 'POST',
                url: 'https://api.restful-api.dev/objects',
                body: req_body
            }
        ).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('Apple MacBook Pro 16')
            expect(response.body.data.year).to.eq(2019)
            expect(response.body.data.price).to.eq(1849.99)
            expect(response.body.data.CPUmodel).to.eq("Intel Core i9")
            expect(response.body.data.Hard_disk_size).to.eq("1 TB")
        })
    });

    it('Method 2 - Dynamically ', () => {
        const req_body = {
            name: Math.random().toString(10).substring(3),
            data: {
                year: 2019,
                price: 1849.99,
                CPUmodel: Math.random().toString(10).substring(3),
                Hard_disk_size: "1 TB"
            }
        }

        cy.request(
            {
                method: 'POST',
                url: 'https://api.restful-api.dev/objects',
                body: req_body
            }
        ).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq(req_body.name)
            expect(response.body.data.year).to.eq(req_body.data.year)
            expect(response.body.data.price).to.eq(req_body.data.price)
            expect(response.body.data.CPUmodel).to.eq(req_body.data.CPUmodel)
            expect(response.body.data.Hard_disk_size).to.eq(req_body.data.Hard_disk_size)
        })
    });

    it.only('Method 3 - API using Fixture ', () => {
        cy.fixture('post_api').then((data) => {
            const requestData = data
            cy.request(
                {
                    method: 'POST',
                    url: 'https://api.restful-api.dev/objects',
                    body: requestData
                }
            ).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq(requestData.name)
                expect(response.body.data.year).to.eq(requestData.data.year)
                expect(response.body.data.price).to.eq(requestData.data.price)
                expect(response.body.data.CPUmodel).to.eq(requestData.data.CPUmodel)
                expect(response.body.data.Hard_disk_size).to.eq(requestData.data.Hard_disk_size)

                expect(response.body).has.property('name', requestData.name) // validate property and its value
            })
        })


    });
})