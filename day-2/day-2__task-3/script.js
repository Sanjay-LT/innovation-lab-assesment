console.log("=== Break & Continue Demonstration ===");

// 1. Finding first prime number (break example)
console.log("Searching for first prime number between 2-20:");
for (let number = 2; number <= 20; number++) {
  let isPrimeNumber = true;
  
  // Check if current number is prime
  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) {
      isPrimeNumber = false;
      break; // Exit inner loop if divisor found
    }
  }
  
  if (isPrimeNumber) {
    console.log(`First prime found: ${number}`);
    break; // Exit outer loop after finding first prime
  }
}

// 2. Printing odd numbers (continue example)
console.log("\nDisplaying odd numbers between 1-20:");
for (let current = 1; current <= 20; current++) {
  if (current % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(current);
}

// 3. Additional example: Skipping specific values
console.log("\nNumbers 1-10, skipping 3 and 7:");
for (let i = 1; i <= 10; i++) {
  if (i === 3 || i === 7) {
    continue;
  }
  console.log(i);
}

// 4. Break in while loop example
console.log("\nCounting until we reach 5:");
let count = 1;
while (true) {
  console.log(count);
  if (count === 5) {
    break; // Exit infinite loop
  }
  count++;
}