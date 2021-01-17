/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let max = 0
  for (let i = 0; i + (max - 1) < A.length; ) {
    let cursor = B.indexOf(A[i])
    let maxMatch = 0
    while (cursor !== -1) {
      let match = 0
      for (
        let j = 0;
        cursor + j < B.length && A[i + j] === B[cursor + j];
        j++, match++
      );
      max = Math.max(max, match)
      maxMatch = Math.max(maxMatch, match)
      cursor = B.indexOf(A[i], cursor + 1)
    }
    i += 1
  }
  return max
}
