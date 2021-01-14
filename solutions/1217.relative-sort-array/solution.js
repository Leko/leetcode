/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const e = (n) => {
    const idx = arr2.indexOf(n)
    if (idx === -1) {
      return Infinity
    }
    return idx
  }

  const targets = []
  const rest = []
  for (let n of arr1) {
    if (arr2.indexOf(n) === -1) {
      rest.push(n)
    } else {
      targets.push(n)
    }
  }
  return targets.sort((a, b) => e(a) - e(b)).concat(rest.sort((a, b) => a - b))
}
