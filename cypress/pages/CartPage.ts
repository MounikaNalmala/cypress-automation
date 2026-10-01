export class CartPage {
  cartItems() {
    return cy.get('[data-test="inventory-item"]');
  }

  checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }

  removeProduct(productName: string) {
    cy.contains('[data-test="inventory-item"]', productName)
      .find('button')
      .contains('Remove')
      .click();
  }

  startCheckout() {
    this.checkoutButton().click();
  }
}

export const cartPage = new CartPage();
