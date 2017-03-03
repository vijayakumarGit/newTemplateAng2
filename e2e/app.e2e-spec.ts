import { InfantPage } from './app.po';

describe('infant App', function() {
  let page: InfantPage;

  beforeEach(() => {
    page = new InfantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
