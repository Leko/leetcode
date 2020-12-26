/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const w = Math.max(num1.length, num2.length)
  const nums = []
  for (let i = 0; i < w; i++) {
    const n = parseInt(num1[num1.length - 1 - i]) || 0
    const m = parseInt(num2[num2.length - 1 - i]) || 0
    const N = (nums[i] || 0) + (n + m)
    if (N >= 10) {
      nums[i] = N % 10
      nums[i + 1] = 1
    } else {
      nums[i] = N
    }
  }
  return nums.reverse().join("")
}
