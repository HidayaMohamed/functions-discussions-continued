// Original function 1:
// function greet(name) {
//     return "Hello, " + name + "!";
// }

const greet = name => `Hello ${name}`;

console.log(greet())

// Original function 2:
// function calculateTotal(price, tax, tip) {
//     const subtotal = price + (price * tax);
//     const total = subtotal + (subtotal * tip);
//     return total;
// }


const calculateTotal = (price, tax, tip) => {
  const subtotal = price + (price * tax);
  const total = subtotal + (subtotal * tip);
  return total;
}
console.log(calculateTotal(100, 3, 50))

// Original function 3:
// function isEven(number) {
//     return number % 2 === 0;
// }

const isEven = number => number % 2 === 0;

console.log(isEven(6))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  evens

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers)

// doubled 

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers)


// sum

const sumNumbers = numbers.reduce((accumulator, number) =>  accumulator + number, 0  );
 

console.log(sumNumbers)
