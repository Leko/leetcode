/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let cursor = 1
  while (cursor < nums.length) {
    if (nums[cursor] === nums[cursor - 1]) {
      nums.splice(cursor, 1)
    } else {
      cursor++
    }
  }
  return nums.length
}
