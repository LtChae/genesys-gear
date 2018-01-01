import { GenesysGearPage } from './app.po';

describe('genesys-gear App', function() {
  let page: GenesysGearPage;

  beforeEach(() => {
    page = new GenesysGearPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
