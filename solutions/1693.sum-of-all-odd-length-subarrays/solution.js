/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0
  for (let len = 1; len <= arr.length; len += 2) {
    for (let i = 0; i <= arr.length - len; i++) {
      for (let j = 0; j < len; j++) {
        sum += arr[i + j]
      }
    }
  }
  return sum
}
