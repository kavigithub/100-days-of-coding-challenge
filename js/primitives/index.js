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

//6. Write a program to reverse a given integer number
let num = 3849;
console.log(new String(num).split('').reverse().join(''));

//7. Write a code to replace all the spaces of the string with underscores
const newString = "replace all the spaces of the string";
console.log(newString.split(" ").join("_"));
console.log(newString.replace(/' '/g, "_"));

//Write a function which can convert the time input given in 12 hours format to 24 hours format
function convertTo24HrsFormat(timeText){
    let timeTextLower = timeText.toLowerCase();
    let [hours, mins] = timeTextLower.split(":");
    if(timeTextLower.endsWith("AM")) hours = hours == 12 ? "0" : hours;
    else if(timeText.endsWith("PM")) hours = hours == 12 ? hours : String(+hours + 12); 
    console.log(hours);
    console.log(hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0))

    return hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0)
}

convertTo24HrsFormat("12:10AM");
convertTo24HrsFormat("09:23PM");

//Write a code to remove all the vowels from a given string
const strJ = "I love JavaScript";
strJ.replace(/[aeiou]/g, "");

// Write a function which checks if a given search text is present either in the beginning of the first name or the second name
function validateName(text, query){
    let serachTxt = text.toLowerCase().split(" ");
    serachTxt.forEach((item) => console.log(item))
}

validateName("Nedson PETER", "pet"); 