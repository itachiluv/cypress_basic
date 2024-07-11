describe('Radio Button', () => {
    it('Visible the Radio Button', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')


        //Verify the visibility
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')


        // Verify to check the radio button
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')

        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')

    })


    it.only('Checkbox', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get(".form-group [type='checkbox']").check().should('be.checked')
    });


})