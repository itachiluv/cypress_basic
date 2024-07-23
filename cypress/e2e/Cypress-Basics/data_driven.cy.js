describe('Data Driven testing', () => {

    it('Verify Multiple Test data', () => {
        cy.fixture("login").then((data) => {
            cy.visit('https://demoqa.com/login')
            data.forEach((userdata) => {
                cy.get('input#userName').type(userdata.username)
                cy.get('input#password').type(userdata.password)
                cy.get('button#login').click()

                if (userdata.username == 'test' && userdata.password == 'Test1234!') {
                    cy.get('#userName-value').should('have.text', userdata.data)
                    cy.get('.text-right.col-md-5.col-sm-12 button#submit').click()
                } else if (userdata.username == 'test1' && userdata.password == 'Test1234!') {
                    cy.get('#userName-value').should('have.text', userdata.data)
                    cy.get('.text-right.col-md-5.col-sm-12 button#submit').click()
                } else if (userdata.username == 'test2' && userdata.password == 'Test1234!') {
                    cy.get('#userName-value').should('have.text', userdata.data)
                    cy.get('.text-right.col-md-5.col-sm-12 button#submit').click()
                } else {
                    cy.get('p#name').should('have.text', userdata.data)

                }
            })
        })
    });
})