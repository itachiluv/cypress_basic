describe('Capture Screenshot', () => {
    it('ScreenShot', () => {
        cy.visit('https://demoqa.com/profile');
        // cy.screenshot('profile')
        // cy.get('div').contains('Elements').click()
        cy.get('li').contains('Text Box').screenshot('textbox')
    });
})