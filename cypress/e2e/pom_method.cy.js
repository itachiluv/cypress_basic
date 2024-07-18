import Login from '../PageObject/login'
import Product from '../PageObject/productPage'

describe('Page Object Patter in Cypress', () => {

    const ln = new Login
    const pro = new Product

    beforeEach(() => {
        cy.log("========Visit Webite==========")
        cy.visit('https://www.automationexercise.com/login')
    });

    it('Login a Page', () => {
        ln.setUsername('luffy@gmail.com')
        ln.setPassword('Test1234')
        ln.setLogin()
        ln.verifyPage('testuser1')

    });


    it('Visit a Product Page', () => {
        ln.setUsername('luffy@gmail.com')
        ln.setPassword('Test1234')
        ln.setLogin()
        ln.verifyPage('testuser1')
        pro.clickProduct()
        pro.searchProduct('tshirt')

    });


    // POM with Fixture Data 
    it.skip('POM pattern with Fixtures', () => {
        cy.visit('https://www.automationexercise.com/login')


        cy.fixture('pom_login.json').then((data) => {
            const ln = new Login
            ln.setUsername(data.username)
            ln.setPassword(data.password)
            ln.setLogin()
            ln.verifyPage(data.result)
        })

    });
})