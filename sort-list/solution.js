/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  const items = []
  while (head) {
    items.push(head.val)
    if (!head.next) {
      break
    }
    head = head.next
  }
  items.sort((a, b) => a - b)

  let next = null
  for (let i = 0; i < items.length; i++) {
    next = new ListNode(items[items.length - 1 - i], next)
  }
  return next
}
