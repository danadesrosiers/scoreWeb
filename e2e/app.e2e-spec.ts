import { ScoreWebPage } from './app.po';

describe('score-web App', () => {
  let page: ScoreWebPage;

  beforeEach(() => {
    page = new ScoreWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
