import { loginPage } from '../pages/LoginPage';
import { inventoryPage } from '../pages/InventoryPage';

describe('SauceDemo login', () => {
  beforeEach(() => loginPage.visit());

  it('logs in with a valid standard user', () => {
    loginPage.login('standard_user', 'secret_sauce');
    inventoryPage.title().should('have.text', 'Products');
    cy.url().should('include', '/inventory.html');
  });

  it('shows an error for a locked out user', () => {
    loginPage.login('locked_out_user', 'secret_sauce');
    loginPage.errorMessage().should('contain.text', 'locked out');
  });

  it('requires username and password', () => {
    loginPage.loginButton().click();
    loginPage.errorMessage().should('contain.text', 'Username is required');
  });
});
