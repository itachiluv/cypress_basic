describe('Assertions', () => {
    it('Implicit Assertions', () => {
        cy.visit('https://demoqa.com/')
        cy.url().should('contain', 'demoqa.com/')
            .and('eq', 'https://demoqa.com/')
            .and('include', 'demoqa')
    })


    it('Implicit Assertion 2', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
        cy.get('#userName-label').should('have.text', 'Full Name')
        cy.get('#userName').type('admin').should('have.value', 'admin')
            .and('have.attr', 'placeholder')
    })

    it('Explicit Assertions 1', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()

        let name = 'Full Name'
        let name2 = 'xyz'
        cy.get('#userName-label').then((x) => {
            cy.log(x.text())
            let actName = x.text()
            expect(actName).to.equal(name)
            expect(actName).to.not.equal(name2)
        })
    })
})
