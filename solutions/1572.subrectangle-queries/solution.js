/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function (rectangle) {
  this.width = rectangle[0].length
  this.height = rectangle.length
  this.cells = rectangle.flatMap((row) => row)
}

SubrectangleQueries.prototype.toIndex = function (x, y) {
  return this.width * y + x
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (
  row1,
  col1,
  row2,
  col2,
  newValue
) {
  for (let y = row1; y <= row2; y++) {
    for (let x = col1; x <= col2; x++) {
      this.cells[this.toIndex(x, y)] = newValue
    }
  }
}

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
  return this.cells[this.toIndex(col, row)]
}

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
