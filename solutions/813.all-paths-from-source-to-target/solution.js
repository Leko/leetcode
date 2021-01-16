/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const result = []
  const open = [[0]]
  while (open.length) {
    const top = open.pop()
    if (top[top.length - 1] === graph.length - 1) {
      result.push(top)
    }
    const idx = top[top.length - 1]
    for (let toIdx of graph[idx]) {
      open.push(top.concat([toIdx]))
    }
  }
  return result
}
