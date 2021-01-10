/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let maxIndex = -1
  for (let i = 1; i + 1 < arr.length; i++) {
    if (
      arr[i - 1] < arr[i] &&
      arr[i] > arr[i + 1] &&
      (maxIndex === -1 || arr[maxIndex] > arr[i])
    ) {
      maxIndex = i
    }
  }
  return maxIndex
}
