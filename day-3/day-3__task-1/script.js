// 1. Simple function with no parameters
function showGreeting() {
  const greeting = "Welcome to JavaScript functions!";
  console.log(greeting);
  alert(greeting); // Added visual feedback
}

// 2. Function using arguments object
function calculateSum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  const message = `Sum using arguments: ${total}`;
  console.log(message);
  alert(message); // Added visual feedback
}

// 3. Function using rest parameters
function sumNumbers(...numbers) {
  const total = numbers.reduce((sum, num) => sum + num, 0);
  const message = `Sum using rest parameters: ${total}`;
  console.log(message);
  alert(message); // Added visual feedback
}

// 4. Additional example: Function with default parameters
function createUser(name = "Guest", age = 18) {
  console.log(`User created: ${name}, ${age} years old`);
}

// Call examples
showGreeting();
calculateSum(1, 2, 3);
sumNumbers(10, 20, 30, 40);
createUser("Alice", 25);
createUser(); // Uses defaults