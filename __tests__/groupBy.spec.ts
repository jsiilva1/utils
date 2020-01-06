import "jest-extended";

import { groupBy } from '../src';

describe('GroupBy suite', () => {
  it('Should work with a callback function', () => {
    const mockReferenceObject = [
      { name: "Homer", surname: "Simpson" }, 
      { name: "Bart", surname: "Simpson" }, 
      { name: "Marge", surname: "Bouvier" },
      { name: "Patty", surname: "Bouvier" },
    ];

    const mockExpectedObject = {
      Simpson: [
        { name: 'Homer', surname: 'Simpson' },
        { name: 'Bart', surname: 'Simpson' },
      ],

      Bouvier: [
        { name: 'Marge', surname: 'Bouvier' },
        { name: 'Patty', surname: 'Bouvier' },
      ],      
    };

    expect(groupBy(mockReferenceObject, (predicate) => predicate.surname)).toEqual(mockExpectedObject);
  }); 
});