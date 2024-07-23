describe('Handling the Child Tabs', () => {
    it('Method 1 for Handling Child tabs', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        // Invoke method - get the value or property of DOM elements
        cy.get(".example > a[href='/windows/new']").invoke('removeAttr', 'target').click()
        let url = cy.url().should('eq', 'https://the-internet.herokuapp.com/windows/new')
        cy.log(url)
        cy.wait(5000)
        cy.go('back');
    });


    it('Method 2 for handling Child Tabs', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((res) => {
            let url = res.prop('href')
            cy.visit(url)
        })
        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000)
        cy.go('back');
    });

    it('Handle Windows', () => {
        cy.visit('https://demoqa.com/browser-windows')
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url
            }).as('windowOpen')
        })
        cy.get('#windowButton').click()
        cy.url().should('eq', 'https://demoqa.com/sample')
        cy.go('back');
    });
})

