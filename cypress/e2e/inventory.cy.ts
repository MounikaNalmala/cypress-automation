import { inventoryPage } from '../pages/InventoryPage';

describe('SauceDemo inventory', () => {
  beforeEach(() => {
    cy.login();
    inventoryPage.title().should('have.text', 'Products');
  });

  it('displays products', () => {
    inventoryPage.inventoryItems().should('have.length.greaterThan', 0);
  });

  it('sorts products by price low to high', () => {
    inventoryPage.sortBy('lohi');

    cy.get('[data-test="inventory-item-price"]').then(($prices) => {
      const prices = [...$prices].map((el) => Number(el.textContent?.replace('$', '')));
      expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
    });
  });

  it('adds a product to the cart', () => {
    inventoryPage.addToCartByName('Sauce Labs Backpack');
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
  });
});
