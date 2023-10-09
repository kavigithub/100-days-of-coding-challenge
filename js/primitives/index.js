// Swap two integers present in variables num1 and num2 without using temporary variable
/* let [a = 10, b = 20] = [b, a];
console.log(a, b); */

// Write a function which returns true if given value of number is an integer without using any inbuilt functions
function isInt(a){
    return a % 1 === 0
}

console.log(isInt(2.0))
console.log(isInt(12.2));
console.log(isInt(0.5));

//Create a function which returns a random number in the given range of values both inclusive
function randomNumberGeneratorInRange(toRange, fromRange){
    return toRange + Math.floor(Math.random() * fromRange - toRange);
}
/* let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber) */
console.log(randomNumberGeneratorInRange(20, 50));

//Write a program to reverse a string
const str = "JavaScript is awesome";
console.log(str.split('').reverse().join(''));

//Write a program to reverse a string by words. Also show the reverse of each words in place
const strnew = "JavaScript is awesome";
console.log(strnew.split(" ").reverse().join(' '));