describe('Fixtures and Data Driven Testing', () => {
    // Direct Access using Fixtures
    it('Direct Access', () => {
        cy.fixture("login").then((data) => {
            cy.visit(data.link);
            cy.get('input#userName').type(data.username)
            cy.get('input#password').type(data.password)
            cy.get('button#login').click()
            cy.get('#userName-value').contains(data.data)
        })

    });

    // Using Hook method ---> Before 
    let userdata;
    before(() => {
        cy.fixture("login").then((data) => {
            userdata = data
        })
    });
    it('Hook Method Before', () => {
        cy.fixture("login").then((data) => {
            cy.visit(userdata.link);
            cy.get('input#userName').type(userdata.username)
            cy.get('input#password').type(userdata.password)
            cy.get('button#login').click()
            cy.get('#userName-value').contains(userdata.data)
        })

    })

})