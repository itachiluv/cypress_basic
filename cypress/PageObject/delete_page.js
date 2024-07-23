class delete_user {
    account_delete() {
        cy.get('b').should('have.text', 'Account Deleted!')
        cy.get('[data-qa="continue-button"]').click()
    }
}

export default delete_user