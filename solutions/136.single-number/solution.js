/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (let n of nums) {
    if (nums.indexOf(n) === nums.lastIndexOf(n)) {
      return n
    }
  }
}
