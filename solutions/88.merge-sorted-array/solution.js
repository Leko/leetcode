/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m)
  for (const num of nums2.slice(0, n)) {
    if (num <= nums1[0]) {
      nums1.unshift(num)
    } else if (num >= nums1[nums1.length - 1]) {
      nums1.push(num)
    } else {
      // TODO: binary search
      const idx = nums1.findIndex((n) => num < n)
      nums1.splice(idx, 0, num)
    }
  }
  return nums1
}
