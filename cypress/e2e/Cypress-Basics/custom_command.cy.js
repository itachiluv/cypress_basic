describe('Custom Commands', () => {
    it('Basic Custom commands for click a link', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get('.product-name >h1').should('have.text', 'Apple MacBook Pro 13-inch')
    });

    // Overwrite the Commands  --- Error 

    it('Over wite the Commands', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('APPLE MACBOOK PRO 13-inch')
        cy.get('.product-name >h1').should('have.text', 'Apple MacBook Pro 13-inch')
    });


    // Login Using Custom Commands
    it.only('Login using custom commands', () => {
        cy.visit('https://demoqa.com/login')
        cy.login('test1', 'Test123$')
        cy.get('#userName-value').should('have.text', 'test1')
    })
})