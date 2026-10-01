import { inventoryPage } from '../pages/InventoryPage';
import { cartPage } from '../pages/CartPage';
import { checkoutPage } from '../pages/CheckoutPage';

describe('SauceDemo checkout', () => {
  beforeEach(() => {
    cy.login();
    inventoryPage.addToCartByName('Sauce Labs Backpack');
    inventoryPage.cartLink().click();
  });

  it('completes checkout successfully', () => {
    cartPage.startCheckout();
    checkoutPage.enterCustomerInfo('Mounika', 'Nalmala', 'V3S1A1');
    checkoutPage.finishOrder();
    checkoutPage.completeHeader().should('contain.text', 'Thank you for your order');
  });

  it('shows validation when checkout information is missing', () => {
    cartPage.startCheckout();
    checkoutPage.continueButton().click();
    checkoutPage.errorMessage().should('contain.text', 'First Name is required');
  });
});
