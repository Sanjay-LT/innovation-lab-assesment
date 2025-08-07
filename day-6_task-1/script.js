document.getElementById('runButton').addEventListener('click', runArrayTasks);

function runArrayTasks() {
  const numbers = [5, 12, 8, 20, 3, 15];
  
  // Filter numbers greater than 10
  const greaterThanTen = numbers.filter(num => num > 10);
  console.log("Numbers > 10:", greaterThanTen);
  
  // Calculate sum of numbers
  const total = numbers.reduce((sum, num) => sum + num, 0);
  console.log("Sum of numbers:", total);
  
  // Calculate product of numbers
  const product = numbers.reduce((mul, num) => mul * num, 1);
  console.log("Product of numbers:", product);
  
  // Create sentence from words array
  const words = ["Hello", "World", "From", "JS"];
  const sentence = words.reduce((acc, word) => `${acc} ${word}`);
  console.log("Sentence:", sentence);
  
  // Slice array from index 1 to 3
  const someNumbers = numbers.slice(1, 4);
  console.log("Slice (1 to 3):", someNumbers);
  
  // Splice and modify array
  const changedNumbers = [...numbers];
  changedNumbers.splice(2, 2, 99, 100);
  console.log("After splice:", changedNumbers);
  console.log("Original array remains unchanged:", numbers);
  
  // Clone array
  const cloneArray = [...numbers];
  console.log("Cloned Array:", cloneArray);
  
  // Merge arrays
  const moreNumbers = [25, 30];
  const mergedArray = [...numbers, ...moreNumbers];
  console.log("Merged Array:", mergedArray);
}