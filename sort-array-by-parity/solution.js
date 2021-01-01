/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  const result = []
  for (let n of A) {
    if (n % 2 === 0) {
      result.unshift(n)
    } else {
      result.push(n)
    }
  }
  return result
}
