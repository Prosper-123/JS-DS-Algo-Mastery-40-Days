// Question 5 ;
// Find the factorial of a number in javascript using recursion ;

function factorial(n) {
    // Base case: if n is 0 or 1, factorial is 1
    if (n === 0 || n === 1) {
    return 1;
    }
    // Recursive case: factorial of n is n * factorial of (n - 1)
    return n * factorial(n - 1);
   }
   
   // Example :
   
   const number = 5;
   const result = factorial(number);
   console.log(`The factorial of ${number} is ${result}`);
   