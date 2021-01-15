/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const result = []
  for (let i = 0; i < nums.length; i += 2) {
    const freq = nums[i]
    const value = nums[i + 1]
    result.push(...new Array(freq).fill(value))
  }
  return result
}
