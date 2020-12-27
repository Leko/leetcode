/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length / 2; j++) {
      const r = A.length - 1 - j
      const [a, b] = [A[i][j], A[i][r]]
      A[i][j] = b ^ 1
      A[i][r] = a ^ 1
    }
  }
  return A
}
