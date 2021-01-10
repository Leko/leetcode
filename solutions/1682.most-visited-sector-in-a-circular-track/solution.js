/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
  const counter = new Array(n).fill(0)
  let cursor = rounds[0]
  counter[cursor - 1]++
  for (let i of rounds.slice(1)) {
    const offset = cursor > i ? n - cursor + i : i - cursor
    for (let k = 1; k <= offset; k++) {
      counter[(cursor - 1 + k) % n]++
    }
    cursor = i
  }
  const max = Math.max(...counter)
  return counter.reduce((acc, n, i) => {
    if (n !== max) {
      return acc
    }
    return acc.concat([i + 1])
  }, [])
}
