/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let tmp = n
  const visited = []
  while (tmp !== 1) {
    if (visited.includes(tmp)) {
      return false
    }
    visited.push(tmp)
    tmp = String(tmp)
      .split("")
      .map((m) => Math.pow(parseInt(m, 10), 2))
      .reduce((acc, n) => acc + n, 0)
  }
  return true
}
