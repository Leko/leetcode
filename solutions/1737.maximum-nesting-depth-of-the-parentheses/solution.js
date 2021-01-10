/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let max = 0
  let tmp = 0
  for (let c of s) {
    if (c === "(") tmp++
    if (c === ")") tmp--
    if (tmp > max) {
      max = tmp
    }
  }
  return max
}
