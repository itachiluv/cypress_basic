# Cypress Test Automation Project

Welcome to the Cypress Test Automation Project repository. This project is designed to automate end-to-end testing using Cypress, a JavaScript-based end-to-end testing framework.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Writing Tests](#writing-tests)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Cypress is a modern end-to-end testing framework that aims to make the process of writing, running, and debugging tests easier. This repository contains a set of tests to ensure the functionality of our web application.

## Features

- Easy to set up and configure
- Write tests in JavaScript
- Real-time reloads
- Automatic waiting
- Powerful debugging tools

## Installation

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed. Then, follow these steps to set up the project:

1. Clone the repository:

    ```bash
    git clone https://github.com/itachiluv/cypress_basic/tree/main/cypress
    cd cypress-project
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Running Tests

To open the Cypress Test Runner and run tests interactively, use the following command:

```bash
npx cypress open

npx cypress run
```

## Folder-structure


```bash
cypress-project/
├── cypress/
│   ├── fixtures/
│   ├── integration/
│   │   └── examples/
│   ├── plugins/
│   └── support/
├── node_modules/
├── .gitignore
├── cypress.json
├── package.json
└── README.md

```

## Writing-tests (Example)

```bash
describe('Assertions', () => {
    it('Implicit Assertions', () => {
        cy.visit('https://demoqa.com/')
        cy.url().should('contain', 'demoqa.com/')
            .and('eq', 'https://demoqa.com/')
            .and('include', 'demoqa')
    })


    it('Implicit Assertion 2', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
        cy.get('#userName-label').should('have.text', 'Full Name')
        cy.get('#userName').type('admin').should('have.value', 'admin')
            .and('have.attr', 'placeholder')
    })

    it('Explicit Assertions 1', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()

        let name = 'Full Name'
        let name2 = 'xyz'
        cy.get('#userName-label').then((x) => {
            cy.log(x.text())
            let actName = x.text()
            expect(actName).to.equal(name)
            expect(actName).to.not.equal(name2)
        })
    })
})

```

## Contributing