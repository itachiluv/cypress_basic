import Website from "../../PageObject/website";
import Contact_Page from "../../PageObject/contactPage";
import 'cypress-file-upload'   //file-upload plug-in

describe('Test Case 6: Contact Us Form', () => {

    const link = new Website
    const contactPage = new Contact_Page
    it('Verify that Contact Us Form', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        link.setWebsite()

        // 3. Verify that home page is visible successfully
        link.homePage_Verify()

        // 4. Click on 'Contact Us' button
        contactPage.click_contact_us()

        // 5. Verify 'GET IN TOUCH' is visible
        contactPage.verify_contact_form_heading()

        // 6. Enter name, email, subject and message
        cy.fixture('contact_page.json').then((data) => {
            contactPage.fill_contact_form(
                data.name,
                data.email,
                data.subject,
                data.message
            )
        })


        // 7. Upload file
        contactPage.upload_file('test1.txt')

        // 8. Click 'Submit' button
        contactPage.click_submit()

        // 9. Click OK button 
        // cypress automaticall click ok button in js confiramtion Popup


        // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
        contactPage.success_message('Success! Your details have been submitted successfully.')

        // 11. Click 'Home' button and verify that landed to home page successfully
        contactPage.click_home_button()
        link.homePage_Verify()

    });
})