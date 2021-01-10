/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  let tmp = 1
  while (tmp < n) {
    tmp *= 4
  }
  return tmp === n
}
