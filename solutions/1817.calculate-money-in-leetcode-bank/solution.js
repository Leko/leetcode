/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let sum = 0
  for (let w = 1; w <= 1 + n / 7; w++) {
    const end = w + 1 > 1 + n / 7
    for (let i = 0; i < (end ? n % 7 : 7); i++) {
      sum += w + i
    }
  }
  return sum
}
