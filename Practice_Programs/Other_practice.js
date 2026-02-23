//Question 1: Write a program to check whether a number is: Positive Negative Zero

function checknumber(number) {
    if (number > 0) {
        console.log("Number is Positive")
    } else if (number < 0) {
        console.log("Number is Negative")
    } else {
        console.log("Number is zero")
    }
}

checknumber(-1);

//Write a program to check whether a number is:Even and Odd

function checkEvenodd(num) {
    if (num % 2 === 0) {
        console.log("Number is even")
    } else {

        console.log("Number is odd")
    }
}

checkEvenodd(75);

//Write a program to find the largest of three numbers.Input: 10, 25, 15

function findlargest(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a + "is largest")
    } else if (b >= a && b >= c) {
        console.log(b + " is largest")
    } else {
        console.log(c + "is largest")
    }
}

findlargest(10, 25, 15)

//Write a program to check whether a year is a leap year.Rules:

// Divisible by 4

// Not divisible by 100

// Unless divisible by 400

function checkleapyear(year) {
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
        console.log("Year is leap year")
    } else {
        console.log("Year is not a leap year")
    }
}
checkleapyear(2024);
// Write a program to check if a number is:

// Divisible by 3 and 5 → Print "Good"

// Divisible by only 3 → Print "Nice"

// Divisible by only 5 → Print "Cool"

// Otherwise → Print "Try Again"

function checkGood(num1) {
    if (num1 % 3 === 0 && num1 % 5 === 0) {
        console.log("Good");
    } else if (num1 % 3 === 0) {
        console.log("Nice")
    } else if (num1 % 5 === 0) {
        console.log("Cool")
    } else {
        console.log("Try Again")
    }
}
checkGood(15);

// Ternary practice
let num2 = 10;
console.log(num2 > 0 ? "Positive" : "Negative");
// Voting Eligibility

// If age ≥ 18 → "Eligible"
// Else → "Not Eligible"

let age = 17;
console.log(age >= 18 ? "Eligible" : "Not Eligible");

// Find Greater Between Two Numbers

// Without using if-else:

// Input: 10, 20
// Output: 20

let a = 40;
let b = 30;
let result = a > b ? a : b;
console.log(result);
