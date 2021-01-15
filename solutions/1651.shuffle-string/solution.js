/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let result = ""
  for (let [, c] of indices
    .map((n, i) => [n, s[i]])
    .sort((a, b) => a[0] - b[0])) {
    result += c
  }
  return result
}
