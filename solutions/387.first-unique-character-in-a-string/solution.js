/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const count = s
    .split("")
    .reduce((acc, c) => acc.set(c, (acc.get(c) ?? 0) + 1), new Map())
  for (let [c, f] of count.entries()) {
    if (f === 1) {
      return s.indexOf(c)
    }
  }
  return -1
}
