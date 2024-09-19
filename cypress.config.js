const { defineConfig } = require("cypress");
const mysql = require('mysql')
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  projectId: "b75mqx",
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config)
        }
      })
      allureCypress(on, config); // Allure reporter setup (optional if you are using Allure)
      // Make sure you return the config object if you modify it
      return config;
    },
    specPattern: 'cypress/e2e/Cypress-Basics/**/*.cy.js',
    "env": {
      "db": {
        "host": "127.0.0.1",
        "user": "root",
        "password": "test1234",
        "database": "dennisivy"
      }
    },
  },
});


//For connecting to SQL Server

function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db)
  // start connection to db
  connection.connect()
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}


// Use in DB  query :
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'test1234';


// FLUSH PRIVILEGES;