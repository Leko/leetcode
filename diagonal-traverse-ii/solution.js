/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
  const visited = []
  const lut = []
  for (let y = 0; y < nums.length; y++) {
    for (let x = 0; x < nums[y].length; x++) {
      lut[y + x] = lut[y + x] || []
      lut[y + x].push(nums[y][x])
    }
  }
  return lut.flatMap((row) => row.reverse())
}
