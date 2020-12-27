/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0
  for (let i = 0; i < mat.length / 2; i++) {
    const r = mat.length - 1 - i
    if (i === r) {
      sum += mat[i][i]
    } else {
      sum += mat[i][i] + mat[r][r] + mat[i][r] + mat[r][i]
    }
  }
  return sum
}
