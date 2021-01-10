/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.w = w
  this.indexMap = []
  let sum = 0
  for (let i = 0; i < w.length; i++) {
    this.indexMap.push(sum + w[i])
    sum += w[i]
  }
  this.total = this.indexMap[this.indexMap.length - 1]
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const v = Math.random() * this.total
  for (let i = 0; i < this.indexMap.length; i++) {
    if (v <= this.indexMap[i]) {
      return i
    }
  }
  return 0
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
