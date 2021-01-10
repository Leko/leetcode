/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const counter = new Map()
  for (let n of nums) {
    const c = counter.get(n) ?? 0
    if (c + 1 > nums.length / 2) {
      return n
    }
    counter.set(n, c + 1)
  }
}
