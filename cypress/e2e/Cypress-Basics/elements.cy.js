describe('Elements Locators', () => {
    it('Css using ID', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get('#item-0').click()
        cy.get('#userName').type('ManiSankar')
        cy.get('#userEmail').type("mani@gmail.com")
        cy.get('#currentAddress').type('Test Address 1')
        cy.get('#permanentAddress').type('Test Address 2')
        cy.get('#submit').click()

    });

    it('Css Using Attribute and Class Name', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get('#item-0').click()
        cy.get('[placeholder="Full Name"]').type('Manisankar') //  Using attribute 
        cy.get('[type="email"]').type('mani@gmail.com')
        cy.get('[placeholder="Current Address"]').type('Test Address 1')
        cy.get('#permanentAddress').type('Test Address 2')
        cy.get('.btn.btn-primary').click()  // Using Class Name
        cy.get('#name').contains('Name:Manisankar')
    })

    it('XPath', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(1)').click()
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]").click()
    })
})
