describe('Hooks and Tags', () => {

    before(() => {
        cy.log('--------Luanch the App--------');
    });
    after(() => {
        cy.log('--------Close the App--------');
    });

    beforeEach(() => {
        cy.log('--------Login-------');
    });

    afterEach(() => {
        cy.log('--------LogOut-------');
    });

    it('Search App', () => {
        cy.log('--------Search function-------');
    });

    it('Advance Search', () => {
        cy.log('--------Advance Search-------');
    });

    it('Close the application', () => {
        cy.log('--------Checking the lists-------');
    })
})