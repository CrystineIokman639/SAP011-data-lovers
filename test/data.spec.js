import { example, anotherExample } from '../src/data.js';


describe('innerHTMLCard', () => {
  it('should be a function', () => {
    expect(typeof innerHTMLCard).toBe('function');
  });

  it('should return a template string in HTML', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
