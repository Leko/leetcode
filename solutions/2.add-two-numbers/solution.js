/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const sum = BigInt(take(l1).join("")) + BigInt(take(l2).join(""))
  const result = {}
  let tmp = result
  ;[...String(sum)].reverse().forEach((n, i, list) => {
    tmp.val = parseInt(n, 10)
    tmp.next = i + 1 === list.length ? null : {}
    tmp = tmp.next
  })
  return result
}

function take(l) {
  const items = []
  let tmp = l
  while (1) {
    items.unshift(tmp.val)
    if (!tmp.next) break
    tmp = tmp.next
  }
  return items
}
