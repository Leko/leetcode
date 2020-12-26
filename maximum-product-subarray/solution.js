/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }

  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
    }
    let tmp = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (tmp * nums[j] > max) {
        max = tmp * nums[j]
      }
      tmp = tmp * nums[j]
    }
  }
  return max
}
