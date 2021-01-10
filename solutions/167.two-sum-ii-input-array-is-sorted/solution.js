/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let c = 0
  for (let n of nums) {
    if (n > target) continue
    const idx = nums.slice(c + 1).indexOf(target - n)
    if (idx !== -1) {
      return [c + 1, c + 1 + idx + 1]
    }
    c++
  }
}
