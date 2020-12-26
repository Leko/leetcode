/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let tmp = start
  for (let i = 1; i < n; i++) {
    tmp = tmp ^ (start + 2 * i)
  }
  return tmp
}
