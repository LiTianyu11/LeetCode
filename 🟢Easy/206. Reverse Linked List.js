/* 
206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:

Example 2:
Input: head = [1,2]
Output: [2,1]


Example 3:
Input: head = []
Output: []
*/

// Soulution 1 Two Pointers
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let temp = null,
    pre = null,
    cur = head;
  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  // temp = cur = null;
  return pre;
};

// Soulution 2 Recursive
var reverse = function (pre, head) {
  if (!head) return pre;
  const temp = head.next;
  head.next = pre;
  pre = head;
  return reverse(pre, temp); // head = temp
};

var reverseList = function (head) {
  return reverse(null, head); //pre = null
};
