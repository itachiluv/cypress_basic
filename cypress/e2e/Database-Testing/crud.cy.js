describe('DataBase Crud', () => {
    it('create table', () => {
        cy.task('queryDb', `create table cypress.details (person_id int,username varchar(150),city varchar(255),number int )`)
        cy.log("Database Created");
    });

    it('Insert table values', () => {
        cy.task('queryDb', `insert into cypress.details(person_id,username,city,number)values
                (1,"test","test","123456"),
                (2,"test1","test1","545642");`).then((result) => {
            expect(result.affectedRows).to.eq(2)

        })
    })

    it('Update table values', () => {
        cy.task('queryDb', `update cypress.details set city = "updateed city" where person_id = 2`).then((result) => {
            expect(result.changedRows).to.eq(1)
            cy.task('queryDb', `select city from cypress.details where person_id=2`).then((result) => {
                expect(result[0].city).to.eq("updateed city")
                cy.log(result[0]);
            })
        })
    })

    it('Verify the Row using query filter', () => {
        cy.task('queryDb', `SELECT COUNT(*) AS "rowCount" FROM cypress.details WHERE City="test";`).then((result) => {
            expect(result[0].rowCount).to.eq(1)
        })
    })

    it('Delete a Table and Verify', function () {
        cy.task('queryDb', `DROP TABLE cypress.details`).then((result) => {
            expect(result.message).to.equal("")
        })
    })
})