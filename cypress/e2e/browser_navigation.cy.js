describe('Browser Navigation', () => {
    it('Back , Forward , reload Function in cypress', () => {
        cy.visit('https://demoqa.com/profile')

        cy.get('div').contains('Elements').click()
        cy.get('li').contains('Text Box').click()
        cy.go('back')
        cy.go('forward')

        cy.go(-1)
        cy.go(1)

        cy.reload()
    });
})