/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
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
var addTwoNumbers = function(l1, l2) {
  const head = new ListNode(0)
  let nowNode = head
  let tmpNum = 0
  let nextNum = 0
  while (l1 || l2) {
    tmpNum += l1 ? l1.val : 0
    tmpNum += l2 ? l2.val : 0
    tmpNum += nextNum ? nextNum : 0
    nextNum = 0
    if (tmpNum >= 10) {
      nextNum = Math.floor(tmpNum / 10) 
      tmpNum %= 10
    }
    nowNode.next = new ListNode(tmpNum)
    nowNode = nowNode.next
    tmpNum = 0
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }
  if (nextNum !== 0) {
    nowNode.next = new ListNode(nextNum)
  }
  return head.next
};
// @lc code=end

