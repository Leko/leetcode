/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  return e(S) === e(T)
}

function e(str) {
  let result = ""
  let offset = 0
  for (let i = 0; i < str.length; i++) {
    const c = str[str.length - 1 - i]
    if (c === "#") {
      offset++
      continue
    }
    if (offset > 0) {
      offset = Math.max(0, offset - 1)
      continue
    }
    result += c
  }
  return result
}
