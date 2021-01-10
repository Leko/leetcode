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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  const open = [root]
  let sum = 0
  while (open.length) {
    const top = open.pop()
    if (low <= top.val && top.val <= high) {
      sum += top.val
    }
    if (top.left !== null) open.push(top.left)
    if (top.right !== null) open.push(top.right)
  }
  return sum
}
