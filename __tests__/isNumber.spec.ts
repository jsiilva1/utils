import "jest-extended";

import { isNumber } from '../src';

describe('Is number Suite', () => {
  it('Fail please', () => {
    expect(isNumber("homer simpson")).toBe(false);
  });

  it('Pass please', () => {
    expect(isNumber(1)).toBe(true);
  });  
});