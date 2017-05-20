import { SpotifyMusicPage } from './app.po';

describe('spotify-music App', () => {
  let page: SpotifyMusicPage;

  beforeEach(() => {
    page = new SpotifyMusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
