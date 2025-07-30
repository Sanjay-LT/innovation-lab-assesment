console.log("=== Loop Control Practice ===");

// 1. While loop example
console.log("Counting 1 to 10 using while loop:");
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
}

// 2. Do-while loop with user input
let userInput;
do {
  userInput = Number(prompt("Please enter a number greater than 5:"));
  if (isNaN(userInput)) {
    console.log("That's not a valid number. Try again.");
  }
} while (userInput <= 5);
console.log("Valid input received:", userInput);

// 3. For loop example
const limit = 5;
console.log(`First ${limit} natural numbers using for loop:`);
for (let i = 1; i <= limit; i++) {
  console.log(i);
}

// 4. Multiplication table
const multiplier = 3;
console.log(`Multiplication table for ${multiplier}:`);
for (let x = 1; x <= 10; x++) {
  console.log(`${multiplier} × ${x} = ${multiplier * x}`);
}

// 5. Bonus: Loop control with break
console.log("Counting to 5, but breaking at 3:");
for (let y = 1; y <= 5; y++) {
  if (y === 4) {
    break;
  }
  console.log(y);
}