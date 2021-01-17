/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  return [dup(nums), missing(nums)]
}

function dup(nums) {
  for (let n of nums) {
    if (nums.lastIndexOf(n) !== nums.indexOf(n)) {
      return n
    }
  }
}

function missing(nums) {
  const set = new Set(nums)
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      return i
    }
  }
}
