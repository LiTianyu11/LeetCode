/*
19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

 
Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Example 2:
Input: head = [1], n = 1
Output: []
Example 3:

Example 3:
Input: head = [1,2], n = 1
Output: [1]
 

*/

//Solution 1
var removeNthFromEnd = function (head, n) {
  let dummyHead = new ListNode(0, head),
    fast = (slow = dummyHead);
  while (n-- >= 0 && fast) fast = fast.next;
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummyHead.next;
};
