/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  let max = 0
  const g = new Map()
  for (let i = 1; i <= n; i++) {
    const sum = String(i)
      .split("")
      .reduce((acc, n) => +n + acc, 0)
    const list = (g.get(sum) ?? []).concat(i)
    max = Math.max(max, list.length)
    g.set(sum, list)
  }

  let sum = 0
  for (let nums of g.values()) {
    if (nums.length === max) sum++
  }
  return sum
}
