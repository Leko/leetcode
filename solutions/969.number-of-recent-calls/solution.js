var RecentCounter = function () {
  this.cache = new Set()
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.cache.add(t)
  for (let tt of this.cache) {
    if (tt < t - 3000) {
      this.cache.delete(tt)
    }
  }
  return this.cache.size
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
