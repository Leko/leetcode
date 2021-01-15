/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  const nums = []
  const open = [[0, root]]
  while (open.length) {
    const [depth, tree] = open.shift()
    nums[depth] = nums[depth] || []
    nums[depth].push(tree.val)
    if (tree.left) {
      open.push([depth + 1, tree.left])
    }
    if (tree.right) {
      open.push([depth + 1, tree.right])
    }
  }
  return nums[nums.length - 1].reduce((acc, n) => acc + n, 0)
}
