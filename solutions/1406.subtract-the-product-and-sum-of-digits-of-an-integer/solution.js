/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const nums = String(n)
    .split("")
    .map((n) => parseInt(n, 10))
  const p = nums.reduce((acc, n) => acc * n, 1)
  const s = nums.reduce((acc, n) => acc + n, 0)
  return p - s
}
