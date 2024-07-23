import Website from "../../PageObject/website";

describe('Test Case 7: Verify Test Cases Page', () => {

    const link = new Website
    it('Verify that navigate to Test Cases Page', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        link.setWebsite()

        // 3. Verify that home page is visible successfully
        link.homePage_Verify()

        // 4. Click on 'Test Cases' button
        cy.get("div[class='item active'] a[class='test_cases_list'] button[type='button']").click()

        // 5. Verify user is navigated to test cases page successfully
        cy.title().should('eq', 'Automation Practice Website for UI Testing - Test Cases')
    });
})