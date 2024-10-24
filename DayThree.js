// Question 3
// Implement a stack using arrays ; 

class Stack {
    constructor() {
    this.items = []; 
    }
   
    // Push element to the top of the stack
   
    push(element) {
    this.items.push(element);
    }
   
    // Remove and return the top element of the stack
   
    pop() {
    if (this.isEmpty()) {
    return "Underflow"; 
    }
    return this.items.pop();
    }
   
    // Return the top element of the stack without removing it
   
    peek() {
    if (this.isEmpty()) {
    return "Stack is empty"; 
    }
    return this.items[this.items.length - 1];
    }
   
    // Check if the stack is empty
   
    isEmpty() {
    return this.items.length === 0;
    }
   
    // Return the size of the stack
   
    size() {
    return this.items.length;
    }
   
    // Print the stack elements
   
    print() {
    let result = "";
    for (let i = 0; i < this.items.length; i++) {
    result += this.items[i] + " ";
    }
    console.log(result);
    }
   }
   
   // Example usage:
   
   const stack = new Stack(); 
   stack.push(10); 
   stack.push(20);
   stack.push(30);
   stack.push(40);
   stack.print(); // Output: 10 20 30 40
   console.log(stack.pop()); // Output: 40
   console.log(stack.peek()); // Output: 30
   console.log(stack.size()); // Output: 3
   console.log(stack.isEmpty()); // Output: false
   