/*707. Design Linked List

Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last

*/

// Soulution 1
class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}
var MyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */

MyLinkedList.prototype.getNode = function (index) {
    if (index < 0 || index >= this.size) return null;
    let cur = new ListNode(0, this.head);
    while (index-- >= 0) {
        cur = cur.next
    }
    return cur;
}

MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;
    return this.getNode(index).val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const toAdd = new ListNode(val, this.head)
    this.head = toAdd;
    this.size++;
    if (!this.tail) { //this.size = 0
        this.tail = toAdd;
    }


};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const toAdd = new ListNode(val, null);
    this.size++
    if (this.tail) {
        this.tail.next = toAdd;
        this.tail = toAdd;
        return;
    }
    this.tail = toAdd;
    this.head = toAdd;

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) return;
    if (index <= 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this.size) {
        this.addAtTail(val);
        return;
    }

    const node = this.getNode(index - 1)
    node.next = new ListNode(val, node.next);
    this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return; //> 改成>=
    if (index === 0) {
        this.head = this.head.next;
        if (index === this.size - 1) {
            this.tail = this.head;
        }
        this.size--;
        return;
    }

    const node = this.getNode(index - 1);
    node.next = node.next.next;
    if (node.next === null) {
        this.tail = node;
    }
    this.size--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */