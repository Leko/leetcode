/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  const results = []
  const evens = A.filter((n) => n % 2 === 1)
  const odds = A.filter((n) => n % 2 === 0)
  for (let i = 0; i < odds.length; i++) {
    results.push(odds[i])
    results.push(evens[i])
  }
  return results
}
