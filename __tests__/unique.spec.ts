import 'jest-extended';

import { unique } from '../src';

describe("Unique Suite", () => {
  it("should remove duplicate items", () => {
    expect(unique([1, 2, 3, 4, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});