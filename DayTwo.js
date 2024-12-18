// question Two
// Find the middle Element of a linked list

class Node {
    constructor(data) {
    this.data = data; 
    this.next = null; 
    }
   }
   
   class LinkedList {
    constructor() {
    this.head = null; 
    }
   
    // Method to append a new node to the end of the linked list
   
    append(data) {
    const newNode = new Node(data); 
    if (!this.head) { 
    this.head = newNode; 
    return; 
    }
    let current = this.head; 
    while (current.next) { 
    current = current.next; 
    }
    current.next = newNode; 
    }
   
    // Method to find the middle element of the linked list
   
    findMiddle() {
    if (!this.head) { 
    return null; 
    }
    let slow = this.head; 
    let fast = this.head; 
    while (fast && fast.next) { 
    slow = slow.next; 
    fast = fast.next.next; 
    }
    return slow.data; 
    }
   }
   
   // Example usage:
   
   const linkedList = new LinkedList(); 
   linkedList.append(1); 
   linkedList.append(2);
   linkedList.append(3);
   linkedList.append(4);
   linkedList.append(5);
   console.log(linkedList.findMiddle());