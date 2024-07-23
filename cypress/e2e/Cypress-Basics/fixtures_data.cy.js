describe('Fixtures and Data Driven Testing', () => {
    // Direct Access using Fixtures
    it.skip('Direct Access', () => {
        cy.fixture("login").then((data) => {
            cy.log(data);
            cy.visit('https://demoqa.com/login');
            cy.get('#userName').type(data.username)
            cy.get('#password').type(data.password)
            cy.get('#login').click()
            cy.get('#userName-value').contains(data.data)
        })

    });

    // Using Hook method ---> Before 
    let userdata;
    before(() => {
        cy.fixture("login").then((data) => {
            userdata = data
            cy.log(userdata);
        })
    });
    it('Hook Method Before', () => {
        cy.fixture("login").then((data) => {
            cy.visit('https://demoqa.com/login');
            cy.get('input#userName').type(userdata.username)
            cy.get('input#password').type(userdata.password)
            cy.get('button#login').click()
            cy.get('#userName-value').contains(userdata.data)
        })

    })

})