/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const map = new Map(
    Object.entries(
      nums.reduce((acc, n) => ({ ...acc, [n]: (acc[n] ?? 0) + 1 }), {})
    )
  )
  const result = []
  for (const [n, c] of map.entries()) {
    if (c > nums.length / 3) {
      result.push(n)
    }
  }
  return result
}
