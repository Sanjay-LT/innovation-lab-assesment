console.log("=== Exploring JavaScript Operators ===");

// Arithmetic Operators
const num1 = 15;
const num2 = 4;
console.log(`Addition (${num1} + ${num2}):`, num1 + num2);
console.log(`Subtraction (${num1} - ${num2}):`, num1 - num2);
console.log(`Multiplication (${num1} * ${num2}):`, num1 * num2);
console.log(`Division (${num1} / ${num2}):`, num1 / num2);
console.log(`Remainder (${num1} % ${num2}):`, num1 % num2);

// Assignment Operators
let total = 10;
total += 5; // Equivalent to total = total + 5
console.log("After += 5:", total);
total *= 2; // Equivalent to total = total * 2
console.log("After *= 2:", total);

// Comparison Operators
console.log("Loose equality (15 == '15'):", 15 == '15');
console.log("Strict equality (15 === '15'):", 15 === '15');
console.log("Greater than check (10 > 9):", 10 > 9);
console.log("Less than or equal (10 <= 10):", 10 <= 10);

// Logical Operators
console.log("AND (true && false):", true && false);
console.log("OR (true || false):", true || false);
console.log("NOT (!true):", !true);

// Ternary Operator
const score = 78;
const result = score >= 70 ? "Excellent" : "Needs Improvement";
console.log(`Grade Evaluation (${score}):`, result);

// Bitwise Operators
console.log("Bitwise AND (5 & 3):", 5 & 3);
console.log("Bitwise OR (5 | 3):", 5 | 3);
console.log("Bitwise XOR (5 ^ 3):", 5 ^ 3);
console.log("Bitwise NOT (~5):", ~5);
console.log("Left shift (5 << 1):", 5 << 1);
console.log("Right shift (5 >> 1):", 5 >> 1);

// Increment/Decrement
let counter = 5;
console.log("Initial counter:", counter);
console.log("Post-increment (counter++):", counter++);
console.log("Value after increment:", counter);
console.log("Pre-decrement (--counter):", --counter);