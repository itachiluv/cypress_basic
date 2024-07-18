describe('Slider ', () => {
    it('Verify the slider', () => {
        cy.visit('https://www.amazon.in/');
        cy.get('#twotabsearchtextbox').type('mobile')
    });


    it('Verify the slider', () => {
        cy.visit('https://demoqa.com/slider');
        cy.get('.range-slider.range-slider--primary').invoke('val', '100').trigger('change')
        cy.get('#sliderValue').trigger('change')
    });

    it.only('Verify the slider', () => {
        cy.visit('https://the-internet.herokuapp.com/horizontal_slider');
        cy.get("input[value = '0']").invoke('val', '1').trigger('change')
        cy.get('#range').should('have.text', 1)

        for (let i = 1; i <= 5; i++) {
            if (i > 0) {
                cy.log(i)
                cy.get("input[value = '0']").invoke('val', '' + i + '').trigger('change')
                cy.get('#range').should('have.text', i)
            }
        }

    });
})


