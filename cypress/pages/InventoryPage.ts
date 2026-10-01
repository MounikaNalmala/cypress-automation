export class InventoryPage {
  title() {
    return cy.get('[data-test="title"]');
  }

  inventoryItems() {
    return cy.get('[data-test="inventory-item"]');
  }

  sortSelect() {
    return cy.get('[data-test="product-sort-container"]');
  }

  cartLink() {
    return cy.get('[data-test="shopping-cart-link"]');
  }

  addToCartByName(productName: string) {
    cy.contains('[data-test="inventory-item"]', productName)
      .find('button')
      .contains('Add to cart')
      .click();
  }

  sortBy(value: 'az' | 'za' | 'lohi' | 'hilo') {
    this.sortSelect().select(value);
  }
}

export const inventoryPage = new InventoryPage();
