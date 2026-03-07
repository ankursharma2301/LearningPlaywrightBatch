// For Loop

// 1️⃣ Print "Hello" 5 times

for (let i = 0; i < 5; i++) {
    console.log("Hello");
}

// 2️⃣  Print numbers from 1 to 10
for (let j = 1; j <= 10; j++) {
    console.log(j);
}

// 3️⃣ Print even numbers from 1 to 20

for (let k = 1; k <= 20; k++) {
    if (k % 2 === 0)
        console.log(k);
}

// 4️⃣ Print the sum of first 10 natural numbers
let sum = 0;

for (let l = 1; l <= 10; l++) {
    sum = sum + l
}

console.log(sum);

// 5️⃣ Print the multiplication table of 5

let num = 5;

for (m = 1; m <= 10; m++) {
    console.log(`${num} * ${m} =${num * m}`);
}

//Print numbers from 10 to 1 (reverse order).
for (let num2 = 10; num2 >= 1; num2--) {
    console.log(`Reverse of ${num2}`)
}
//Print odd numbers between 1 and 20.

for (let num3 = 1; num3 <= 20; num3++) {
    if (num3 % 2 !== 0) {
        console.log(`Odd numbers are ${num3}`)
    }
}

//Count numbers from 1 to 50 divisible by 5.

let count = 0;
for (num4 = 1; num4 <= 50; num4++) {
    if (num4 % 5 === 0) {
        count++;
    }
}
console.log(`Total numbers divisible by 5 is ${count}`);

//Print square of numbers from 1 to 10.

for (let num5 = 1; num5 <= 10; num5++) {
    console.log(num5 + " -> " + num5 * num5);
}

//Level 2 – Medium (Interview Type)
//Print the sum of even numbers from 1 to 100.
let sum1 = 0;

for (let num6 = 1; num6 <= 100; num6++) {
    if (num6 % 2 === 0) {
        sum1 = sum1 + num6;
    }
}
console.log(`Sum of even number is ${sum1}`);

//Print factorial of a number.

let num7 = 5;
let factorial = 1;

for (let p = 1; p <= num7; p++) {
    factorial = factorial * p;
}

console.log(`Factorial is ${factorial}`)

//Reverse a number using a loop.

let number = 23456;
let reverse = 0;

while (number > 0) {
    let digit = number % 10 // Last digit nikal rha hai
    reverse = reverse * 10 + digit; // Reverse number bana rha hai
    number = Math.floor(number / 10)// Last number remove kr rha hai
}
console.log(reverse);

//12 Count digits in a number.

let number1 = 8765343;
let count1 = 0;

while (number1 > 0) {
    number1 = Math.floor(number1 / 10)
    count1++
}

console.log(`Total digit is : ${count1}`);
//13️⃣ Find largest digit in a number.

let number2 = 456783;
let largest = 0;

while (number2 > 0) {

    let digit1 = number2 % 10

    if (digit1 > largest) {
        largest = digit1;
    }

    number2 = Math.floor(number2 / 10)

}

console.log(`Largest number is ${largest}`);

//Print numbers between 1–50 divisible by both 3 and 5.

for (let a = 1; a <= 50; a++) {

    if (a % 3 === 0 && a % 5 === 0) {
        console.log(a);
    }

}