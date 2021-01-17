/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let counter = new Map()
  for (let n of nums) {
    counter.set(n, (counter.get(n) ?? 0) + 1)
  }
  return [...counter.entries()]
    .sort(([na, a], [nb, b]) => (a - b) * 1000 + (nb - na))
    .reduce((acc, [n, c]) => acc.concat(new Array(c).fill(n)), [])
}
