/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.indexMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    const c = this.indexMap.get(n) ?? []
    this.indexMap.set(n, c.concat([i]))
  }
}

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  const indexes = this.indexMap.get(target)
  const index = ~~(Math.random() * indexes.length)
  return indexes[index]
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
