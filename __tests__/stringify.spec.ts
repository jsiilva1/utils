import 'jest-extended';

import { stringify } from '../src';

describe('Stringify suite', () => {
  it('Should return undefined if there are circular reference', () => {
    const object: any = { character: 'Homer', occupation: 'Idiot' };
    object.object = object;

    expect(stringify(object)).toBe(undefined);
  });

  it('Should return given object as json string', () => {
    const mockReferenceObject = { character: 'Homer', occupation: 'Idiot' };
    const jsonStringExpected = '{"character":"Homer","occupation":"Idiot"}';

    expect(stringify(mockReferenceObject)).toBe(jsonStringExpected);
  });
});