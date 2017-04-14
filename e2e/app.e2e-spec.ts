import { ForumAngularOneFrameworkPage } from './app.po';

describe('forum-angular-one-framework App', () => {
  let page: ForumAngularOneFrameworkPage;

  beforeEach(() => {
    page = new ForumAngularOneFrameworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
