import type { Page } from '@playwright/test';

export class LoginPage {
  constructor (private readonly page: Page) {}
  private readonly _username = () => this.page.getByTestId('username');
  private readonly _password = () => this.page.getByTestId('password');
  private readonly _submit = () => this.page.getByTestId('login-button');
  private async goto() {
    await this.page.goto('/#/');
  }

  public async login(username: string, password: string) {
    await this.goto();
    await this._username().fill(username);
    await this._password().fill(password);
    await this._submit().click();
  }
}
