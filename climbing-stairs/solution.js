// Note: climbStairs is like fibonacci numbers
// f(1) === 1, f(2) === 2, f(n) = f(n - 1) + f(n - 2)
// 1 === 1 [1]
// 2 === 2 [1,1], [2]
// 3 === 3 [1,1,1], [1,2], [2,1]
// 4 === 5 [1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2]
// 5 === 8
// 6 === 13
// 7 === 21
const lup = []
for (let i = 1; i <= 45; i++) {
  if (i <= 2) {
    lup[i] = i
  } else {
    lup[i] = lup[i - 1] + lup[i - 2]
  }
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  return lup[n]
}
