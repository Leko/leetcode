/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  return ~~(n / 2) * ~~(n / 2 + (n % 2))
}
