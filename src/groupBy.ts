import { curry } from "./types";

export const groupBy = <T>(iterable: T[], generator: curry): object => {
  const groupedValues: object = {};

  for (const value of iterable) {
    const keyValue = generator(value);

    if (!groupedValues[keyValue]) {
      groupedValues[keyValue] = [];
    }

    groupedValues[keyValue].push(value);
  }

  return groupedValues;
};