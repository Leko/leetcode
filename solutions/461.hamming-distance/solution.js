/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  const _a = x.toString(2)
  const _b = y.toString(2)
  const len = Math.max(_a.length, _b.length)
  const a = _a.padStart(len, "0")
  const b = _b.padStart(len, "0")
  let sum = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) sum++
  }
  return sum
}
