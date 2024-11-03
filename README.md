# qacy-qtruck

<p>Automation project for the Qtruck platform, for academic purposes and learning Cypress.</p>

## Tools used
- NodeJS 20.17.0
- Cypress 13.15.0
- Cypress-browser-permissions 1.1.0
- Cypress-mongodb 6.2.1
- Allure Report 2.40.2

## Pre-requisites:
- Install Cypress
- Install NodeJS

## Installing dependencies and tools:
Open the terminal in the `backend` and `frontend` folder and run `npm install`

Open the the `tests` folder and run `npm install`

## Execution
To execute, use the Cypress command in the root of the tests folder:

`npx cypress open` -> To open Cypress with all automated test cases;
`npx cypress run` -> To run Cypress tests in a command-line environment;


## Execution Generating Reports
To execute using the `allure report`:

`npx cypress run --env allure=true` -> To run Cypress tests in a command-line environment and generate the Allure report;
`npx allure serve` -> To view the report.

