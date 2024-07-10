describe('PopUp Handling', () => {
    it('Normal JS Alert', () => {
        cy.visit('https://demoqa.com/')
        cy.xpath("//body/div[@id='app']/div[@class='body-height']/div[@class='home-content']/div[@class='home-body']/div[@class='category-cards']/div[3]/div[1]")
            .click()
        cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
        cy.get('#alertButton').click()

        cy.on('window:alert', (t) => {
            expect(t).to.contains('You clicked a button')
        })

    })
    // PopUp  Wait for 5 seconds
    it('Wait 5 Second for PopUp', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(3)').click()
        cy.xpath("//div[@class='element-list collapse show']//li[@id='item-1']").click()
        cy.get('#timerAlertButton').click()
        // cy.wait(6000)

        cy.on('window:alert', (t) => {
            expect(t).to.contains('This alert appeared after 5 seconds')
        })
    })

    // Js Confirmation alert popup using OK Button
    it('Alert Popup using Ok button', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(3)').click()
        cy.xpath("//div[@class='element-list collapse show']//li[@id='item-1']").click()
        cy.get('#confirmButton').click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('Do you confirm action?')
        })
        cy.get('#confirmResult').should('have.text', 'You selected Ok')
    });

    // Js Confirmation alert popup using OK Button
    it('Alert Popup using CANCEL Button', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(3)').click()
        cy.xpath("//div[@class='element-list collapse show']//li[@id='item-1']").click()
        cy.get('#confirmButton').click()

        cy.on('window:confirm', () => false) // Popup cancel button using false in windows:confirm event

        cy.get('#confirmResult').should('have.text', 'You selected Cancel')
    });


    // JS Prompt popup Using Ok Button
    it('Prompt Popup using OK button', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(3)').click()
        cy.xpath("//div[@class='element-list collapse show']//li[@id='item-1']").click()

        cy.window().then((res) => {
            cy.stub(res, 'prompt').returns('hello world')
        })

        cy.get('#promtButton').click()

        cy.get('#promptResult').should('have.text', 'You entered hello world')
    });


    //Authenticate Popup for login
    it('Authenticate Popup', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')

    });

})