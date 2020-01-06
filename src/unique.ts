export const unique = <T>(arrangment: T[]): T[] => {
  const result: T[] = [];

  for (let i = 0; i < arrangment.length; i++) {
    const value: T = arrangment[i];

    if (result && result.indexOf(value) > -1) {
      continue;
    }

    result.push(value);
  }

  return result;
};
