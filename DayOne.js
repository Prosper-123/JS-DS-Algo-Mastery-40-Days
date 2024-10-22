// Question One
// Reverse a linked list in javascript ;

class Node {
    constructor(data) {
    this.data = data; 
    this.next = null; 
    }
   }
   
   function reverseLinkedList(head) {
    let prev = null; 
    let current = head; 
   
    while (current !== null) {
    let nextTemp = current.next;
    current.next = prev; 
   
    // Move pointers one position ahead for the next iteration
    prev = current; // Move prev pointer one step ahead
    current = nextTemp; // Move current pointer one step ahead
    }
   
    // After the loop, prev will be pointing to the new head of the reversed list
    return prev;
   }
   
   // Example usage:
   // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
   let head = new Node(1);
   head.next = new Node(2);
   head.next.next = new Node(3);
   head.next.next.next = new Node(4);
   head.next.next.next.next = new Node(5);
   
   console.log("Original linked list:");
   let current = head;
   while (current !== null) {
    console.log(current.data);
    current = current.next;
   }
   
   // Reverse the linked list
   head = reverseLinkedList(head);
   
   console.log("\nReversed linked list:");
   current = head;
   while (current !== null) {
    console.log(current.data);
    current = current.next;
   }