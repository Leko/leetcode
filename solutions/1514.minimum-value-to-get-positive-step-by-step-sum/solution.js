/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let sum = 0
  let min = nums[0]
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    min = Math.min(min, sum)
  }
  return min < 0 ? Math.abs(min) + 1 : 1
}
