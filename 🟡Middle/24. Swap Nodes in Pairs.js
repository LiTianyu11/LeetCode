/*24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:


Example 2:
Input: head = []
Output: []
Example 3:


Example 3:
Input: head = [1]
Output: [1]
 
*/

// Soulution 1
var swapPairs = function (head) {
  let dummyHead = new ListNode(0, head);
  let cur = dummyHead;
  let temp = null,
    temp1 = null;
  while (cur.next && cur.next.next) {
    temp = cur.next;
    temp1 = cur.next.next.next;
    cur.next = cur.next.next;
    cur.next.next = temp;
    temp.next = temp1;
    cur = cur.next.next;
  }
  return dummyHead.next;
};

// Soultion 2
var swapPairs = function (head) {
  let DummyHead = new ListNode(0, head);
  let cur = DummyHead;
  while (cur.next && cur.next.next) {
    let temp = cur.next,
      temp1 = cur.next.next;
    temp.next = temp1.next;
    cur.next = temp1;
    temp1.next = temp;
    cur = temp;
  }
  return DummyHead.next;
};
