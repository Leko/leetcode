/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0
  let y = 0
  for (let c of moves) {
    switch (c) {
      case "U":
        y++
        break
      case "D":
        y--
        break
      case "L":
        x--
        break
      case "R":
        x++
        break
    }
  }
  return x === 0 && y === 0
}