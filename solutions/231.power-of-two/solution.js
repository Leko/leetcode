/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let tmp = 1
  while (tmp < n) {
    tmp *= 2
  }
  return tmp === n
}
