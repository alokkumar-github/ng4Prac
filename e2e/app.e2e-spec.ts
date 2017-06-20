import { Ng4DemoPage } from './app.po';

describe('ng4-demo App', () => {
  let page: Ng4DemoPage;

  beforeEach(() => {
    page = new Ng4DemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
