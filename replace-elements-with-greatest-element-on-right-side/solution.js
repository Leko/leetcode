/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const items = []
  for (let i = 1; i < arr.length; i++) {
    items.unshift(Math.max(...arr.slice(-i)))
  }
  items.push(-1)
  return items
}
