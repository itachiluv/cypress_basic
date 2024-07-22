describe('Database Testing', () => {
    it('Sample Database Testing', () => {
        cy.task('queryDb', 'SELECT * FROM dennisivy.accounts_customer;').then(res => {
            const rec = res;
            const result = Object.values(rec[1]);
            const result_length = result.length;

            for (let i = 0; i < rec.length; i++) {
                const record = Object.values(rec[i]);

                for (let j = 0; j <= 6; j++) {
                    cy.log(record[j])

                }
                cy.log("----------------------")

            }

            cy.log('Total number of records:', rec.length);
            cy.log('Result length:', result_length)
        }, error => {
            cy.log(`Query failed: ${error.message}`);
        });
    });
});
