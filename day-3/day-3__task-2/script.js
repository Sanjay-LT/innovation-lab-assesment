// 1. Function Expression
const showMessage = function() {
  const message = "This message comes from a function expression!";
  console.log(message);
  return message;
};

// 2. Arrow Function (no parameters)
const showWelcome = () => {
  const welcome = "Welcome! This is an arrow function.";
  console.log(welcome);
  return welcome;
};

// 3. Arrow Function with parameters
const calculateTotal = (price1, price2) => {
  const total = price1 + price2;
  console.log(`Total calculated: $${total}`);
  return total;
};

// 4. Immediately Invoked Function Expression (IIFE)
const runImmediateFunction = (function() {
  return function() {
    const result = "IIFE executed immediately when defined!";
    console.log(result);
    return result;
  };
})();

// Additional examples
// Arrow function with implicit return
const squareNumber = num => num * num;
console.log("Square of 5:", squareNumber(5));

// Function expression with callback
const processData = function(data, callback) {
  console.log("Processing data...");
  return callback(data);
};

// Test calls
showMessage();
showWelcome();
calculateTotal(10, 20);
console.log("Square of 4:", squareNumber(4));
processData([1, 2, 3], data => data.length);