/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  return points.slice(1).reduce((acc, p, i) => acc + d(points[i], p), 0)
}

function d(point1, point2) {
  const dx = Math.abs(point1[0] - point2[0])
  const dy = Math.abs(point1[1] - point2[1])
  const min = Math.min(dx, dy)
  return min + Math.max(dx, dy) - min
}
