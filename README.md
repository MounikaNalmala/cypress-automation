# Cypress SauceDemo Automation

A Cypress + TypeScript UI automation framework for [SauceDemo](https://www.saucedemo.com/), structured with reusable page objects, custom commands, test data, CI, and Sauce Labs-ready cloud execution.

## Tech stack

- Cypress
- TypeScript
- Page Object Model
- GitHub Actions
- Sauce Labs / saucectl

## Project structure

```text
cypress-automation/
├── .github/workflows/cypress.yml
├── .sauce/config.yml
├── cypress/
│   ├── e2e/
│   │   ├── checkout.cy.ts
│   │   ├── inventory.cy.ts
│   │   └── login.cy.ts
│   ├── fixtures/
│   │   └── users.json
│   ├── pages/
│   │   ├── CartPage.ts
│   │   ├── CheckoutPage.ts
│   │   ├── InventoryPage.ts
│   │   └── LoginPage.ts
│   └── support/
│       ├── commands.ts
│       └── e2e.ts
├── cypress.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Test coverage

The current suite covers:

- Valid login
- Locked user login validation
- Required-field login validation
- Inventory page validation
- Product sorting
- Add to cart
- Successful end-to-end checkout
- Checkout required-field validation

## Install

```bash
npm install
```

## Run locally

Open Cypress:

```bash
npm run cy:open
```

Run all tests headlessly:

```bash
npm run cy:run
```

Run using Chrome:

```bash
npm run test:chrome
```

## Sauce Labs

Install saucectl if it is not already installed, then configure your Sauce Labs credentials as environment variables:

```bash
export SAUCE_USERNAME="your-username"
export SAUCE_ACCESS_KEY="your-access-key"
```

Run the cloud suite:

```bash
saucectl run
```

The Sauce Labs configuration lives in `.sauce/config.yml`.

Do not commit Sauce Labs credentials to this repository.

## CI

GitHub Actions runs the Cypress suite automatically on pushes and pull requests targeting `main`.

The workflow installs dependencies with `npm ci`, executes Cypress headlessly, and uploads failure screenshots when available.

## Design choices

- Test logic is separated from page interaction logic through Page Objects.
- Stable `data-test` selectors from SauceDemo are used instead of brittle CSS class selectors.
- A reusable `cy.login()` custom command avoids repeated login boilerplate.
- Assertions remain in specs so expected business behavior is easy to read.
- Cypress automatic retries and built-in waiting are used instead of static sleeps.

## Future enhancements

Useful next additions include API coverage, test tagging, Mochawesome/Allure reporting, environment-specific configuration, accessibility checks, visual testing, and expanded Sauce Labs browser/platform coverage.
