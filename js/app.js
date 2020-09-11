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

// 3. calculate
// Write a function called calculate.

// This function should take three arguments: two numbers and a string.

// Name the parameters num1, num2, and operation.

// If if the function is called with the third argument as "add", it should return the sum of num1 and num2.

// If if the function is called with the third argument as "sub", it should return return num1 minus num2.

// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

function calculate(num1, num2, str) {  
    if (str === 'add') {
        return num1 + num2;
    } else if (str === 'sub') {
        return num1 - num2;
    } else if (str === 'mult') {
        return num1 * num2;
    } else if (str === 'div') {
        return num1 / num2;
    } else if (str === 'exp') {
        return Math.pow(num1, num2);
    }
}

console.log(calculate(2, 2, 'exp'));

