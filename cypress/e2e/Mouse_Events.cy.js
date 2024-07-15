import '@4tw/cypress-drag-drop'


describe('Handling Mouse Events', () => {
    it('Mouse Hover', () => {

        cy.visit('https://toolsqa.com/')
        cy.get('.navbar__tutorial-menu').click()

        // ----------Verify all Hovering Tab to Hover --------------------

        // cy.get('ul > li span').then((res) => {
        //     let limit = res.length
        //     cy.log(limit)
        // })
        // let list_no = 9
        // for (let l = 1; l <= list_no; l++) {
        //     cy.get('ul >li:nth-child(' + l + ') span').trigger('mouseover')
        // }

        // -------------------------------------------------------------------------------

        cy.get('ul >li:nth-child(2) span').trigger('mouseover').click()
        cy.get("ul[class='active']>li>a[title='Cypress']").should('have.text', 'Cypress')
    });


    it('Right Click', () => {
        cy.visit('https://demoqa.com/buttons')

        // Method 1------------------------
        // cy.get('#rightClickBtn').trigger('contextmenu')
        // cy.get('#rightClickMessage').should('have.text', 'You have done a right click')

        // Method 2 =========================
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click')
    });


    it('Double Click', () => {
        cy.visit('https://demoqa.com/buttons')
        // Method 1 ---------------------------------------------
        // cy.get('#doubleClickBtn').dblclick()
        // cy.get('#doubleClickMessage').should('have.text', 'You have done a double click')

        // Method 2 ========================================
        cy.get('#doubleClickBtn').trigger('dblclick')
        cy.get('#doubleClickMessage').should('have.text', 'You have done a double click')
    });

    it('Drag and Drop', () => {
        cy.visit('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
        cy.get('#box7').should('be.visible')
        cy.get('#box107').should('be.visible')

        // cy.get('#box7').drag('#box107')
        cy.get('#box6').drag('#box106')

    });


    it.only('Scroll Down the Page', () => {

        cy.visit('https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags');
        cy.get("img[alt='India']").scrollIntoView({ duration: 2000 }).should('be.visible')
        cy.get("img[alt='Argentina']").scrollIntoView({ duration: 5000 }).should('be.visible')
    });
})
