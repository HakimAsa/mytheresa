import { getMythRestUrl, doSetFullUrl, hideCharacters } from '../../../utils/Globals';
const exMsg = 'Your input array should contain at least one element';
const BASE_URL = 'https://api.themoviedb.org/3';

describe('getMythRestUrl method tests', () => {
  it('should be defined', () => {
    expect(getMythRestUrl).toBeDefined();
  });
  it('should return the api base url', () => {
    expect(getMythRestUrl()).toBe(BASE_URL);
  });
});

describe('hideCharacters method tests', () => {
  it('should be defined', () => {
    expect(hideCharacters).toBeDefined();
  });

  it('should return the passed string if its length is less or equal to 35', () => {
    expect(hideCharacters('Mytheresa is awsome')).toBe('Mytheresa is awsome');
  });

  it('should return end the string with ... if its length superceds the provided limit', () => {
    expect(hideCharacters('Mytheresa is awsome', 5)).toBe('Mythe...');
  });
});

describe('doSetFullUrl function tests', () => {
  it('should be defined', () => {
    expect(doSetFullUrl).toBeDefined();
  });

  it('should throw an exception if no arg is passed', () => {
    expect(() => {
      doSetFullUrl();
    }).toThrow(exMsg);
  });

  it('should throw an exception if only one arg is passed', () => {
    expect(() => {
      doSetFullUrl(false);
    }).toThrow(exMsg);

    expect(() => {
      doSetFullUrl(true);
    }).toThrow(exMsg);
  });

  it('should return the full url by appending / and endpoint if first arg is false and the second arg is single', () => {
    expect(doSetFullUrl(false, '/post')).toBe(`${BASE_URL}/post`);
  });

  it('should place a / between items of the second arg if first arg is false then appending them to the base url', () => {
    expect(doSetFullUrl(false, '/post', 'add-post')).toBe(`${BASE_URL}/post/add-post`);
  });

  it('should place a / in front if first arg is true and the second arg is atomic, then appending them to the base url', () => {
    expect(doSetFullUrl(true, 'myposts')).toBe(`${BASE_URL}/myposts`);
  });

  it('should remove one / if the enddpoints start with //, then appending to base ulr if first arg is true', () => {
    expect(doSetFullUrl(true, '/post', 'add-post')).toBe(`${BASE_URL}/post/add-post`);
  });
});
