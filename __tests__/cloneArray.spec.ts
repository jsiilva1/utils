 import "jest-extended";

import { cloneArray } from '../src';

describe('Clone Array Suite', () => {
  it('Should work like lodash simple clone', () => {
    const object = [{ a: 'foo', b: 'bar' }];

    expect(cloneArray(object)).toEqual(object);
  });
});