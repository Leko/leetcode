/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const bits = n
    .toString(2)
    .split("")
    .sort((a, b) => b - a)
  return bits.lastIndexOf("1") + 1
}
