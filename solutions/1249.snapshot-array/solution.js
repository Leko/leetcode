/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.cursor = 0
  this.map = new Map()
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  const list = this.map.get(index) ?? []
  list[this.cursor] = val
  this.map.set(index, list)
}

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  return this.cursor++
}

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  const list = this.map.get(index) ?? []
  for (let i = snap_id; i >= 0; i--) {
    if (typeof list[i] === "undefined") {
      continue
    }
    return list[i]
  }
  return 0
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
