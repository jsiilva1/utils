import "jest-extended";

import { prettyNumber } from '../src';

describe('Pretty number suite', () => {
  it('should turn random number 259.422 into 259.4 with "k" tier SI', () => {
    const number = 259422;
    
    expect(prettyNumber(number)).toEqual('259.4k');
  });

  it('should turn the number in the million scale with "m" tier SI', () => {
    const number = 1000000;
    
    expect(prettyNumber(number)).toEqual('1.0m');
  });  
});