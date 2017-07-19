import { Assignment5.1Page } from './app.po';

describe('assignment5.1 App', () => {
  let page: Assignment5.1Page;

  beforeEach(() => {
    page = new Assignment5.1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
