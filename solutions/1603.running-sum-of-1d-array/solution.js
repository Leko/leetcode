/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  nums.forEach((n, i) => {
    nums[i] = (nums[i - 1] || 0) + n
  })
  return nums
}
