console.log("=== Exploring Data Types ===");

// Basic type examples
const quantity = 42;
const price = "29.99";
const isAvailable = false;
const emptyValue = null;
let notDefined;
const customer = { firstName: "Alex", loyaltyPoints: 1500 };

console.log("Quantity (number):", quantity);
console.log("Price (string):", price);
console.log("Availability (boolean):", isAvailable);
console.log("Empty value:", emptyValue);
console.log("Undefined value:", notDefined);
console.log("Customer object:", customer);

// Type conversions
const quantityText = String(quantity);
const numericPrice = Number(price);
const automaticConversion = "5" * 3;

console.log("Number to text conversion:", quantityText);
console.log("Price text to number:", numericPrice);
console.log("Automatic string to number (\"5\" * 3):", automaticConversion);

// Additional type check
console.log("Type of quantity:", typeof quantity);
console.log("Type of price:", typeof price);