/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let closest = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    let l = i + 1,
      r = nums.length - 1
    while (l < r) {
      const y = nums[l]
      const z = nums[r]
      const k = `${x},${y},${z}`
      const sum = x + y + z
      closest =
        Math.abs(target - sum) < Math.abs(target - closest) ? sum : closest
      if (sum > target) {
        r--
      } else if (sum < target) {
        l++
      } else {
        return target
      }
    }
  }
  return closest
}
