/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const sorted = strs.map((s) => s.split("").sort().join(""))
  const visited = []
  const result = []
  for (let i = 0; i < strs.length; i++) {
    if (visited[i]) {
      continue
    }
    visited[i] = true
    const pairs = [strs[i]]
    let tmp = sorted.indexOf(sorted[i], i + 1)
    while (tmp !== -1) {
      pairs.push(strs[tmp])
      visited[tmp] = true
      tmp = sorted.indexOf(sorted[i], tmp + 1)
    }
    result.push(pairs)
  }
  return result
}
