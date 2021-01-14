/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const list = arr.sort((a, b) => a - b)
  for (let n of new Set([...list].reverse())) {
    const idx = list.indexOf(n)
    const lastIdx = list.lastIndexOf(n)
    if (lastIdx !== -1 && idx !== -1 && lastIdx - idx === n - 1) {
      return n
    }
  }
  return -1
}
