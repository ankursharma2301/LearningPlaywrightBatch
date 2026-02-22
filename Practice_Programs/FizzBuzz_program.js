// Write a program that prints numbers from 1 to 100. However, for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."

for (let i = 1; i <= 100; i++) {

    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    console.log(output || i);
}
//===============================================================================

// Write a program that:

// Prints numbers from 1 to 50

// For multiples of 3 → print "Fizz"

// For multiples of 5 → print "Buzz"

// For multiples of 7 → print "Pop"

// For numbers divisible by any combination of them → print the combined word

// 15 → FizzBuzz

// 21 → FizzPop

// 35 → BuzzPop

// 105 → FizzBuzzPop

// for ( let j =1; j <=50; j++){
//     if (j % 3 ===0 && j % 5===0 && j%7===0){
//         console.log("FizzBuzzPop")
//     } else if (j % 3===0 && j%5===0){
//         console.log("FizzBuzz")
//     } else if(j%3===0 && j%7===0){
//         console.log("FizzPop")
//     } else if (j%5===0 && j%7===0){
//         console.log("BuzzPop")

//     }else if (j%3===0){
//         console.log("Fizz")
//     }else if (j%5===0){
//         console.log("Buzz")
//     }else if (j%7===0){
//         console.log("Pop")
//     }else{
//         console.log(j)
//     }
// }
// independent if statement ke sath
for (let k = 1; k <= 50; k++) {
    let output = "";

    if (k % 3 === 0) output += "Fizz";
    if (k % 5 === 0) output += "Buzz";
    if (k % 7 === 0) output += "Pop";

    console.log(output || k);
}