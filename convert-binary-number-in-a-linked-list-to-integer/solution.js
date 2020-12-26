/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let str = ""
  while (1) {
    str += head.val
    if (!head.next) break
    head = head.next
  }
  console.log(str, parseInt(str, 2))
  return parseInt(str, 2)
}
