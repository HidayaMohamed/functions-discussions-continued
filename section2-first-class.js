const square = function (a) {
    return a * a;
}

console.log(square(4))


const mathOperations = [function add(a, b ) { return a + b }, function subtract(a , b ) { return a - b}, function multiply(a, b) { return a * b}, function divide(a , b) {return a / b }]


function calculator(a, b, operation) {
    return operation(a,b)
}


console.log(calculator(2, 2, mathOperations[0]))

console.log(calculator(5, 3, mathOperations[1]))

// We are calling the calculator() function by passing in numbers and one of the stored mathoperations using its index.


function createMultiplier(multiplier) {
    return function (input) {
        return input * multiplier;
    }
}
const triple = createMultiplier(3);
console.log(triple(4));

const doubler = createMultiplier(2)
console.log(doubler(5))

const halver = createMultiplier(0.5)
console.log(halver(10))

// createMultiplier returns a new function each time it is called. 
// Function Factories and Customization:This pattern allows for the creation of specialized functions without rewriting the function everytime.
// When the inner function is created it keeps a reference to the variables in the scope where it is defined, This concept is called closure.



