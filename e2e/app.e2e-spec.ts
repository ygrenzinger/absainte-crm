import { Ng2FirebaseAuthPage } from './app.po';

describe('ng2-firebase-auth App', function() {
  let page: Ng2FirebaseAuthPage;

  beforeEach(() => {
    page = new Ng2FirebaseAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
