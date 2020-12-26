/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const list = nums1.concat(nums2).sort((a, b) => a - b)
  if (list.length % 2 === 0) {
    const mid = list.length / 2
    return (list[mid - 1] + list[mid]) / 2
  }
  return list[Math.floor(list.length / 2)]
}
