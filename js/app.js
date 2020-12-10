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

// 4. pandigital numbers
// Note: The following question is weird, we know. In interviews, you will absolutely be given coding challenges with "weird" questions and you'll need to be very careful when reading these types of questions to make sure you understand what you're being asked to do.

// A number of length n is 1-to-n pandigital if it makes use of all the digits 1 to n exactly once.

// The number 15234 is 1-to-n pandigital because it is 5 numbers long and includes 1, 2, 3, 4, and 5.

// The number 333 is not 1-to-n pandigital.

// The number 0 is not 1-to-n pandigital.

// The number 987654321 is 1-to-n pandigital.

// Write a function that checks if a number is 1-to-n pandigital.
// console.log(typeof(str));
//     console.log(str);
// for (let i = 0; i < arr.length; i++) {


function pandigital(num) {
    let str = num.toString().split('');
    let arr = Array.from(str);
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '1':
                arr.splice(i, i + 1);
                break;
            case '2':
                arr.splice(i, i + 1);
                break;
            case '3':
                arr.splice(i, i + 1);
                break;
            case '4':
                arr.splice(i, i + 1);
                break;
            case '5':
                arr.splice(i, i + 1);
                break;
            case '6':
                arr.splice(i, i + 1);
                break;
            case '7':
                arr.splice(i, i + 1);
                break;
            case '8':
                arr.splice(i, i + 1);
                break;
            case '9':
                arr.splice(i, i + 1);
                break;
        
            default:
                break;
        }
        console.log(arr);
    }
    
    
}

pandigital(123456789);
// 5. printGreeting v2.0
// There is a very rudimentary JavaScript function for receiving user input called prompt().

// Usage:

// 	const userInput = prompt("Please enter some input");
// userInput is now whatever the user entered.

// There is another rudimentary JavaScript function for displaying text called alert(). You probably have heard of it. It takes a string as a parameter. Read about it on mdn.

// Let's revisit printGreeting.

// First get the userInput as above. Then write a function called printGreeting2 with a parameter name that returns a greeting with the argument interpolated into the greeting as before, but this time use the alert function to display the greeting to the user.



function secondGreeting(input) {
    alert(input);
}

// secondGreeting(prompt('Please enter some input'));