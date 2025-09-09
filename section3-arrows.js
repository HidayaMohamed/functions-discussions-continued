// Original function 1:
function greet(name) {
  return "Hello, " + name + "!";
}
// Arrow function

const greet = (name) => "Hello, " + name + "!";

console.log(greet("Hidaya"));

// Original function 2:
function calculateTotal(price, tax, tip) {
  const subtotal = price + price * tax;
  const total = subtotal + subtotal * tip;
  return total;
}
//  Arrow function
const calculateTotal = (price, tax, tip) => {
  const subtotal = price + price * tax;
  const total = subtotal + subtotal * tip;
  return total;
};

console.log(calculateTotal(100, 20, 50));

// Original function 3:
function isEven(number) {
  return number % 2 === 0;
}
const isEven = (number) => number % 2 === 0;

console.log(isEven(11));
// - What syntax changes did you make?
/* Replaced the function keyword with =>
    we removes the return keyword since arrow functions have implicit return.
    we removed the curly brackets in instances where our code was just a single line. 

// - When can you omit parentheses around parameters?
/* when u only have a single parameter.
// - When can you omit the 'return' keyword?
/* when the arrow function is a single line of code.*/
// - Which style do you find more readable and why?
// Regular functions

// Arrow Functions with Arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = (numbers) => {
  const evens = numbers.filter((n) => n % 2 === 0);
};

console.log(evens);

const doubled = (numbers) => {
  const doubled = numbers.map((n) => n * 2);
};
console.log(doubled);

const sum = (numbers) => {
  const sum = numbers.reduce((acc, n) => acc + n, 0);
};
console.log(sum);


