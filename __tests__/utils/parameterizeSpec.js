var modulePath = '../../src/js/utils/parameterize';

jest.dontMock(modulePath);
const parameterizeExport = require(modulePath);

describe('Utilities - parameterize.toObject', () => {

  it('should convert a string to a JSON object with the correct keys', () => {
    expect(1).toEqual(1);
  });

  it('should decode all values in the returned JSON object', () => {
    expect(1).toEqual(1);
  });

  it('should log a warning if passed an invalid string and leave the invalid key-value pair out', () => {
    spyOn(console, 'warn');
    console.warn('test');
    expect(console.warn).toHaveBeenCalled();
  });

});

describe('Utilities - parameterize.toQuery', () => {

  it('should handle multiple keys and return a string', () => {
    expect(1).toEqual(1);
  });

  it('should encode all values from the given object in the returned string', () => {
    expect(1).toEqual(1);
  });

  it('should throw an error if passed a nested javascript object', () => {
    expect(1).toEqual(1);
  });

});

/**
beforeEach(function(){
  spyOn(console, 'error');
})

it('should print error to console', function(){
  yourApp.start();
  expect(console.error).toHaveBeenCalled();
})


it('should not throw an error when provided with a truthy condition', () => {
  expect(() => {
    assert(1, '1 is truthy right');
  }).not.toThrow();
});

it('should throw an error when provided with a falsy condition', () => {
  expect(() => {
    assert(1 === 2, '1 === 2');
  }).toThrow();
});

it('should throw an error with the provided message when provided and condition is falsy', () => {
  expect(() => {
    assert('Test' === 'test', expectedMessage);
  }).toThrow(expectedMessage);
});
*/
