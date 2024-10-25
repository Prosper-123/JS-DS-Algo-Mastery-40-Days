// Question 4;
// How to implement a queue using arrays ;

class Queue {
    constructor() {
    this.items = []; 
    }
   
    // Add an element to the end of the queue
   
    enqueue(element) {
    this.items.push(element);
    }
   
    // Remove and return the first element from the queue
   
    dequeue() {
    if (this.isEmpty()) {
    return "Underflow";
    }
    return this.items.shift();
    }
   
    // Return the first element in the queue without removing it
   
    front() {
    if (this.isEmpty()) {
    return "Queue is empty"; // If queue is empty
    }
    return this.items[0];
    }
   
    // Check if the queue is empty
   
    isEmpty() {
    return this.items.length === 0;
    }
   
    // Return the size of the queue
   
    size() {
    return this.items.length;
    }
   
    // Print the queue elements
   
    print() {
    let result = "";
    for (let i = 0; i < this.items.length; i++) {
    result += this.items[i] + " ";
    }
    console.log(result);
    }
   }
   
   // Example usage:
   
   const queue = new Queue();
   queue.enqueue(10); 
   queue.enqueue(20);
   queue.enqueue(30);
   queue.enqueue(40);
   queue.print(); // Output: 10 20 30 40
   console.log(queue.dequeue()); // Output: 10
   console.log(queue.front()); // Output: 20
   console.log(queue.size()); // Output: 3
   console.log(queue.isEmpty()); // Output: false