/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (num < 1) return false
  if (num === 1) return true
  let tmp = num
  for (let p of [2, 3, 5]) {
    while (tmp !== 1 && tmp % p === 0) {
      tmp /= p
    }
  }
  return tmp === 1
}
