export class CheckoutPage {
  firstName() {
    return cy.get('[data-test="firstName"]');
  }

  lastName() {
    return cy.get('[data-test="lastName"]');
  }

  postalCode() {
    return cy.get('[data-test="postalCode"]');
  }

  continueButton() {
    return cy.get('[data-test="continue"]');
  }

  finishButton() {
    return cy.get('[data-test="finish"]');
  }

  completeHeader() {
    return cy.get('[data-test="complete-header"]');
  }

  errorMessage() {
    return cy.get('[data-test="error"]');
  }

  enterCustomerInfo(first: string, last: string, postal: string) {
    this.firstName().type(first);
    this.lastName().type(last);
    this.postalCode().type(postal);
    this.continueButton().click();
  }

  finishOrder() {
    this.finishButton().click();
  }
}

export const checkoutPage = new CheckoutPage();
