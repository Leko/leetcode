/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let n of nums) {
    const index = nums.indexOf(n)
    for (let m of nums.slice(index + 1)) {
      if (n + m === target) {
        return [index, nums.indexOf(m, index + 1)]
      }
    }
  }
}
