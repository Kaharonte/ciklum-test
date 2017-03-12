import { CiklumTestPage } from './app.po';

describe('ciklum-test App', function() {
  let page: CiklumTestPage;

  beforeEach(() => {
    page = new CiklumTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
