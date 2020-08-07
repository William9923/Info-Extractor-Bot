const { textParser, urlParser } = require('.././src/util/parser');

describe('parser.js define function test', () => {
  test('text parser should be defined', () => {
    expect(textParser).toBeDefined();
  });
  test('scraper parser should be defined', () => {
    expect(urlParser).toBeDefined();
  });
});

describe('parser.js functionality test', () => {
  test('text parser functionality check', () => {
    expect(textParser('!find --k uwu --t uwuuwu')).toEqual(['uwu', 'uwuuwu']);
  });
  test('scraper parser functionality check', () => {
    expect(urlParser('!find --k uwu --u https://jestjs.io/')).toEqual([
      'uwu',
      'https://jestjs.io/',
    ]);
  });
});
