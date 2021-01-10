/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MIN = Math.pow(2, 31) * -1
  const MAX = Math.pow(2, 31) - 1

  const z = parseInt([...String(Math.abs(x))].reverse().join("")) * Math.sign(x)
  if (z < MIN || z > MAX) return 0

  return z
}
