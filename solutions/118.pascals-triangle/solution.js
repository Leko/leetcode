/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = []
  for (let row = 1; row <= numRows; row++) {
    const line = [1]
    for (let i = 1; i < row; i++) {
      if (i + 1 === row) {
        line.push(1)
      } else {
        line.push(result[row - 2][i - 1] + result[row - 2][i])
      }
    }
    result.push(line)
  }
  return result
}
