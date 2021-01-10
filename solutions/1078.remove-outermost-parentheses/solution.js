/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let result = ""
  let stack = 0
  for (let c of S) {
    if (c === "(") {
      stack++
      if (stack === 1) {
        continue
      }
    }
    if (c === ")") {
      stack--
      if (stack === 0) {
        continue
      }
    }
    result += c
  }
  return result
}
