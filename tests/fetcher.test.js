const { text, scraper } = require('.././src/util/fetcher');

describe('fetcher.js defined test', () => {
  test('text service should be defined', () => {
    expect(text).toBeDefined();
  });
  test('scraper service should be defined', () => {
    expect(scraper).toBeDefined();
  });
});

describe('fetcher.js functionality test', () => {
  test('text service functionality check', () => {
    return text(
      '!find --k Lorem --t Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed augue aliquam, facilisis arcu quis, semper velit. Integer elementum molestie ultrices. Nullam ornare lorem velit. Sed vitae quam eu mi. '
    ).then((data) => {
      expect(data.answer).toEqual([
        '?=Lorem ipsum dolor sit amet , consectetur adipiscing elit .',
        'Nullam ornare ?=lorem velit .',
      ]);
    });
  });
  test('scraper service functionality check', () => {
    return scraper(
      '!find --k sad --u https://en.wikipedia.org/wiki/IU_(singer)'
    ).then((data) => {
      expect(data.answer).toEqual([
        'Yoon Sang wrote the song for IU after spotting her momentary ?=sad expression on a television broadcast .',
        "[ 61 ] The ballad 's tone was a departure from her more recent releases , with IU describing it as `` dark '' , `` ?=sad '' yet `` nostalgic '' , which is closer to her music preference .",
        "Other ventures [ edit ] Philanthropy [ edit ] Since February 2012 , IU has been an ambas?=sador for South Korea 's National Police Agency in their anti-bullying campaigns in schools ; she was made an honorary member of the police force in 2013 before being promoted to an honorary senior police officer in 2014 for a two-year term .",
        '[ 287 ] Additionally , IU was chosen to be the ambas?=sador for Expo 2012 held in Yeosu .',
        "^ 윤상 , 아이유 '나만 몰랐던 이야기 ' 준 것 후회 `` 고등학생에 너무 슬픈곡 '' [ IU 's 'Only I Did n't Know ' : Yoon Sang regrets , `` The song is too ?=sad for a high schooler . `` ] .",
      ]);
    });
  });
});
