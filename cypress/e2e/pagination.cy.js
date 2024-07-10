describe('Pagination', () => {


    // Verify the table rows and columns
    it('Verify the table Rows and columns', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('table#productTable tr').should('have.length', 6)
        cy.get('table#productTable tr th').should('have.length', 4)
        cy.get('table#productTable tr td').should('have.length', 20)
    });

    // Verify the table cell values 
    it('Verify the Table Values', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('table#productTable tr:nth-child(2) td:nth-child(2)').should('have.text', 'Product 2')
        cy.get('table#productTable tr:nth-child(2) td:nth-child(3)').should('have.text', '$19.99')
    });


    //Get all Row values 
    it('get all row values', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('table#productTable tbody tr')
            .each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get('td').each(($cel, index, $cels) => {
                        cy.log($cel.text())
                    })
                })
            })
    });

    // Pagination and All page cell value
    it.only('Pagination and All row values', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        // cy.get('ul#pagination li a').then(($res) => {
        //     let pageNumber = $res.length
        //     cy.log(pageNumber)
        // })
        let PageNumber = 4
        for (let p = 1; p <= 4; p++) {
            if (PageNumber > 1) {
                cy.get("ul#pagination li:nth-child(" + p + ") a").click()
                cy.wait(3000)
                cy.get('table#productTable tbody tr')
                    .each(($row, index, $rows) => {
                        cy.wrap($row).within(() => {
                            cy.get('td').each(($cel, index, $cels) => {
                                cy.log($cel.text())
                            })
                        })
                    })
            }
        }
    });

})