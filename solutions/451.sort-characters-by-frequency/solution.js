/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const count = s
    .split("")
    .reduce((acc, c) => acc.set(c, (acc.get(c) ?? 0) + 1), new Map())
  return [...count.entries()]
    .sort(([, a], [, b]) => (b - a) * 1000 + b - a)
    .flatMap(([c, f]) => new Array(f).fill(c))
    .join("")
}
