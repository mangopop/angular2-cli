import { AngularCliPage } from './app.po';

describe('angular-cli App', function() {
  let page: AngularCliPage;

  beforeEach(() => {
    page = new AngularCliPage();
  });

  it('should display message saying todo', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todo');
  });
});
