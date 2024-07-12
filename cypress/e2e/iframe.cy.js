import 'cypress-iframe'
describe('Handling Iframe', () => {
    it('Method 1 Handling IFrames', () => {
        cy.visit('https://demoqa.com/frames')
        let iframe = cy.get('#frame1')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
            .find('h1#sampleHeading')
            .should('have.text', 'This is a sample page');



    });


    it('Method 2 Using Custom Commands', () => {
        cy.visit('https://demoqa.com/frames')
        cy.getIframe('#frame1')
            .find('h1#sampleHeading')
            .should('have.text', 'This is a sample page');
    });


    it.only('Method 3 Using Cypress IFrame Plug-in', () => {
        cy.visit('https://demoqa.com/frames')
        cy.frameLoaded('#frame1')
        cy.iframe('#frame1').find('h1#sampleHeading')
            .should('have.text', 'This is a sample page');
    });

})