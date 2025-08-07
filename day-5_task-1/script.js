const numbers = [5, 12, 8, 20, 3, 15];
const greaterThanTen = numbers.filter(function(num) {
  return num > 10;
});
console.log("Numbers > 10:", greaterThanTen);

const nums = [1, 2, 3, 4];
const total = nums.reduce(function(acc, curr) {
  return acc + curr;
}, 0);
console.log("Sum:", total);

const product = nums.reduce(function(acc, curr) {
  return acc * curr;
}, 1);
console.log("Product:", product);

const words = ["I", "love", "JavaScript"];
const sentence = words.reduce(function(acc, curr) {
  return acc + " " + curr;
});
console.log("Sentence:", sentence);

const colors = ["red", "blue", "green", "yellow", "pink"];
const slicedColors = colors.slice(1, 4);
console.log("Sliced Colors:", slicedColors);
console.log("Original Colors:", colors);

const fruits = ["apple", "banana", "mango", "grape"];
fruits.splice(1, 2, "orange", "peach");
console.log("After Splice:", fruits);

const original = [1, 2, 3];
const clone = [...original];
console.log("Cloned Array:", clone);

const arr1 = [10, 20];
const arr2 = [30, 40];
const merged = [...arr1, ...arr2];
console.log("Merged Array:", merged);