/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let tmp = 1
  while (tmp < n) {
    tmp *= 3
  }
  return tmp === n
}
