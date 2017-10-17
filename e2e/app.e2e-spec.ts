import { Ng4CockpitPage } from './app.po';

describe('ng4-cockpit App', () => {
  let page: Ng4CockpitPage;

  beforeEach(() => {
    page = new Ng4CockpitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
