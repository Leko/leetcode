/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  return index.reduce((acc, i, c) => {
    acc.splice(i, 0, nums[c])
    return acc
  }, [])
}
