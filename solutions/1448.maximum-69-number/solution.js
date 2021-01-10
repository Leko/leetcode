/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  const N = [...String(num)]
  const index = N.indexOf("6")
  if (index === -1) {
    return num
  }
  N[index] = "9"
  return parseInt(N.join(""), 10)
}
