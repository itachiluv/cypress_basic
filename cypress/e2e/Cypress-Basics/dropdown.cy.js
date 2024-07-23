describe('Handling Dropdown', () => {
    it('Verify the Old style Dropdown', () => {
        cy.visit('https://demoqa.com/select-menu')
        cy.get('#oldSelectMenu').select('Blue').should('have.value', 1)
    });

    // Bootstrap dropdowns
    it('Verify the bootstrap dropdown', () => {
        cy.visit('https://demoqa.com/select-menu');
        cy.get('#withOptGroup').click();
        cy.get('#react-select-2-input').type('Group 1').type('{enter}')
        cy.get('.css-1uccc91-singleValue').should('have.text', 'Group 1, option 1')

        cy.get('#react-select-2-input').type('Group 2').type('{enter}')
        cy.get('.css-1uccc91-singleValue').should('have.text', 'Group 2, option 1')
    });


    // Auto - Suggest Dropdown 
    it.only('Auto Suggest Dropdown', () => {
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get('#p-search > .cdx-button--fake-button > .vector-icon').click()
        cy.get('.cdx-search-input__input-wrapper [title="Search Wikipedia [alt-shift-f]"]').type('Football')
        cy.get('.cdx-menu-item').then(($res) => {
            let list = $res.length
            cy.log(list)
        })

        cy.contains('Football at the Summer Olympics').click()


        cy.get('#firstHeading').should('have.text', 'Football at the Summer Olympics')
    });


})