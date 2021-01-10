/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const c = arr.reduce((acc, n) => {
    acc[n] = acc[n] ?? 0
    acc[n]++
    return acc
  }, {})
  const list = Object.values(c)
  const size = new Set(list).size
  return list.length === size
}
