class Contact_Page {

    click_contact_us() {
        cy.get("a[href='/contact_us']").click()
    }

    verify_contact_form_heading() {
        cy.get("div.contact-form > h2").should('have.text', 'Get In Touch')
    }

    fill_contact_form(name, email, subject, message) {
        cy.get('input[name="name"]').type(name)
        cy.get('input[name="email"]').type(email)
        cy.get('input[name="subject"]').type(subject)
        cy.get('textarea[name="message"]').type(message)
    }

    upload_file(file) {
        cy.get("input[name='upload_file']").attachFile(file)
    }

    click_submit() {
        cy.get("input[name='submit']").click()
    }

    success_message(text) {
        cy.get('.status.alert.alert-success').should('have.text', text)
    }

    click_home_button() {
        cy.get("a[class='btn btn-success'] span").click()
    }
}

export default Contact_Page