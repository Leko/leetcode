/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let tmp = num
  while (tmp >= 10) {
    tmp = String(tmp)
      .split("")
      .map((m) => parseInt(m, 10))
      .reduce((acc, n) => acc + n, 0)
  }
  return tmp
}
