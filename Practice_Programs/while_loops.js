
// 1️⃣ Print "Playwright" 5 times

let i = 1;

while (i <= 5) {
    console.log("Playwright")
    i++;
}

// 2️⃣ Print numbers from 1 to 10

let j = 1;

while (j < 11) {
    console.log(j);
    j++;
}

// 3️⃣ Print even numbers from 1 to 20

let k = 1;

while (k <= 20) {
    if (k % 2 === 0)
        console.log(k)
    k++;
}

// 4️⃣ Calculate sum of first 10 natural numbers

let num = 1;
let sum = 0;

while (num <= 10) {
    sum = sum + num;
    num++;
}

console.log("Sum is:", sum);

// 5️⃣ Print the multiplication table of 7

let mult = 7;
let num1 = 1

while (num1 <= 10) {
    console.log(`${mult} * ${num1} = ${mult * num1}`)
    num1++;
}