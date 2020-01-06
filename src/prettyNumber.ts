export const prettyNumber = (n: number) => {
  const symbols = ['', 'k', 'm', 'g', 't', 'p', 'e'];

  // determines SI symbol
  const tier = Math.log10(n) / 3 | 0;

  // if zero, we don't need a suffix
  if (tier === 0) return n.toString();

  // get suffix and determine scale
  const suffix = symbols[tier];
  const scale = Math.pow(10, tier * 3);

  const scaled = n / scale;

  // format number and add suffix
  return scaled.toFixed(1) + suffix;
};
