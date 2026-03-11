//Create an array of 5 fruits and print the first and last fruit.
let fruits = ["Apple", "Banana", "Grapes", "Mango", "Guava"]

console.log(fruits[0]);
console.log(fruits[4]);

//2️⃣ Modify an Array// Create an array of numbers [10,20,30,40].
// Change 30 → 35 and print the updated array.

let numbers = [10, 20, 30, 40]
numbers[2] = 35;
console.log(numbers);

//3️⃣ Add Elements// Create an array [1,2,3].// Add
// 4 at the end
// 0 at the beginning

let array = [2, 4, 6, 3];
array.push(4);
console.log(array);
array.unshift(0);
console.log(array);

// 4️⃣ Remove Elements

// Array:// ["Chrome","Firefox","Edge","Safari"]// Remove:// first browser// last browser// Print final array.

let browsers = ["Chrome", "Firefox", "Edge", "Safari"];

browsers.shift();
browsers.pop();
console.log(browsers);

//5️⃣ Find Element

// Array:

// [5,10,15,20,25]

// Check if 15 exists in array.

let element = [5, 10, 15, 20, 25]

if (element.includes(15)) {
    console.log("Number found")
}
else {
    console.log("Number not found")
}
//6️⃣ Count Even Numbers
let evennumber = [12, 7, 9, 20, 33, 18, 40];
let count = 0;

for (i = 0; i < evennumber.length; i++) {
    if (i % 2 === 0) {
        count++;
    }
}
console.log(`Even numbers count: ${count}`);

//Find Largest Number
let newarray = [45, 12, 89, 23, 67];
let largest = newarray[0]

for (let m = 1; m < newarray.length; m++) {
    if (newarray[m] > largest) {
        largest = newarray[m];
    }
}
console.log(`largest number is ->${largest}`)

// 8️⃣ Convert Names to Uppercase

// Array// ["ankur","rahul","john"]

let names = ["ankur", "rahul", "john"];

let Uppernames = names.map(name => name.toUpperCase());

console.log(Uppernames);

// 9️⃣ Filter Passed Students
// Marks // [35,80,67,40,20]// Return students >=40

let marks = [35, 80, 67, 40, 20]

let passed = marks.filter(s => s >= 40);
console.log(passed);

// 🔟 Reverse an Array// Input
// [1,2,3,4,5]
// Output// [5,4,3,2,1]

let numarray = [1, 2, 3, 4, 5];

let reversed = []

for (let i = numarray.length - 1; i >= 0; i--) {
    reversed.push(numarray[i]);
}

console.log(reversed)

//Hard
// 11️⃣ Remove Duplicates
// Input// [1,2,2,3,4,4,5]
// Output// [1,2,3,4,5]

let num1 = [1, 2, 2, 3, 4, 4, 5];
let unique = []

for (j = 0; j < num1.length; j++) {
    if (!unique.includes(num1[j])) {
        unique.push(num1[j])
    }
}

console.log(unique)

//13️⃣ Find Second Largest Number

// Input

// [10,40,20,50,30]

// Output

// Second Largest: 40

let num3 = [10, 40, 20, 50, 30]

num3.sort((a, b) => b - a)

console.log("Second largest:", num3[1]);

//---------------------------------------------------------------
//Exercise 1 : API Response Validation

// You receive an array of API response codes. Write code to:

// Check if ALL responses are successful (200–299)

// Find the FIRST non-success code

// Return all unique error codes


let responses = [200, 201, 404, 500, 404, 200, 503];

let allSuccesfull = responses.every(code => code >= 200 && code <= 299);

console.log(`All responses succesfull ,${allSuccesfull}`);

let nonSucces = responses.find(code => code < 200 || code > 299);

console.log(`First non success code,${nonSucces}`)

let errors = responses.filter(code => code < 200 || code > 299)
let uniqueErrors = [...new Set(errors)];

console.log(uniqueErrors);

//------------------------
let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort((a, b) => a - b);
console.log("Fastest:", sorted[0]);

//---------
// What is the output and why? How would you fix it?

// javascript

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status);

//
let results = ["pass", "fail", "pass", "pass", "fail"];
let totalPassed = results.filter((s) => s === "pass").length

console.log(totalPassed)

let responses1 = [200, 500, 404, 201, 503];

let allFailed = responses1.filter((val) => val > 299)
console.log(allFailed)

let responses2 = [200, 200, 404, 500, 201, 503];

let success = responses2.filter((val2) => val2 >= 200 && val2 < 300).length
let failures = responses2.filter((val2) => val2 > 400).length

console.log(success);
console.log(failures)

let err = [404, 500, 404, 503, 500];

let uniqueerr = [...new Set(err)];

console.log(uniqueerr)
