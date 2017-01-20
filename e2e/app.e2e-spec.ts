import { FirmenbuchPage } from './app.po';

describe('firmenbuch App', function() {
  let page: FirmenbuchPage;

  beforeEach(() => {
    page = new FirmenbuchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
