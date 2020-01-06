export const cloneArray = <T>(arrangment: T[]): T[] => {
  const inputLength = arrangment.length;
  const newArray = new Array(inputLength);

  for (let i = 0; i < inputLength; i++) {
    newArray[i] = arrangment[i];
  }

  return newArray;
};
