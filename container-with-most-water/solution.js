/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const w = j - i
      const h = Math.min(height[i], height[j])
      max = Math.max(max, w * h)
    }
  }
  return max
}
