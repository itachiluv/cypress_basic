import 'cypress-file-upload'
describe('File Upload', () => {
    it('Single File Upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test1.txt')
        cy.get('#file-submit').click()
        cy.get('#content .example > h3').should('have.text', 'File Uploaded!')
    })
    it.only('File Upload with Rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({ filePath: 'test1.txt', fileName: 'myTest.txt' })
        cy.get('#file-submit').click()
        cy.get('#content .example > h3').should('have.text', 'File Uploaded!')
    })
})