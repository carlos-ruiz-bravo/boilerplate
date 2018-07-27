import { WebdmrPage } from './app.po';

describe('webdmr App', () => {
  let page: WebdmrPage;

  beforeEach(() => {
    page = new WebdmrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
