import { Auth0App2Page } from './app.po';

describe('auth0-app2 App', () => {
  let page: Auth0App2Page;

  beforeEach(() => {
    page = new Auth0App2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
