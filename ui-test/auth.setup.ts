import { test as setup, expect } from '@playwright/test';
import path from 'path';
import { LoginPage } from '../lib/pages/login.page';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  const authenticate = new LoginPage(page);
  await authenticate.login(
    process.env.UI_USERNAME ?? 'username',
    process.env.UI_PASSWORD ?? 'password',
  );
  await page.context().storageState({ path: authFile });
});
