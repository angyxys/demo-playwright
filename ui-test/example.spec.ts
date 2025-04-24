import { test, expect } from '@playwright/test';

test.describe('Check Demo Store', () => {
  test.use({ storageState: './playwright/.auth/user.json'})
  test('Demo store cart store', async ({ page }) => {
    await page.goto('/inventory.html');
    await page.click('text=Sauce Labs Backpack');
    await page.click('text=Add to Cart');
    const totalPrice = page.locator('.inventory_details_price');
    const totalCartItems = page.getByTestId('shopping-cart-badge');
    expect(await totalPrice.textContent()).toBe('$29.99');
    expect(await totalCartItems.textContent()).toBe('1');
    await page.getByTestId('inventory-item-price').click();
    await page.locator('#react-burger-menu-btn').click();
    await page.getByTestId('logout-sidebar-link').click();
    expect(page.url()).toBe(`${process.env.UI_URL}/`);
  });  
});
