// 1. printGreeting
// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

function printGreeting(name) {
    return `Hello ${name}`;
}

console.log(printGreeting('John'));

// 2. reverseWordOrder
// Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

function reverseWordOrder(str) {
    return str.split(" ").reverse();
}

console.log(reverseWordOrder('John Hello'));