// Enter a number and add 7 to it.
let int = prompt("Please enter a number.");
let add7 = function () {
};
console.log(parseInt(int) + 7);

//----------------------------------------------------------------
// multiplies two numbers added by the user.
let int = Number(prompt("Please enter a number."));
let int2 = Number(prompt("Please enter a second number."));
let multi2 = function () {
};
console.log(int * int2);

//----------------------------------------------------------------
// Capitalizes the first letter and makes everything else lowercase.
let word = prompt("Please enter a word.");
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};
console.log(capitalize(word));

//----------------------------------------------------------------
// Gives the last letter of the inputted string.
let word = prompt("Please enter a word.");
function lastLetter(word) {
    return word.slice(-1)
};
console.log(lastLetter(word));
//----------------------------------------------------------------
// Simple "for" loop.
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
for (let i = 1; i <= answer; i++) {
    console.log(i);
//----------------------------------------------------------------
// Fizzbuzz solution.
    let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

    for (let i = 1; i <= answer; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
//----------------------------------------------------------------
// Function for a random selection.
    function getComputerChoice(computerChoice) {
        return computerChoice[Math.floor(Math.random() * computerChoice.length)]
    }