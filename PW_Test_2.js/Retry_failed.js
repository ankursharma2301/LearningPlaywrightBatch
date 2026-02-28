// Retry Failed API Call
// In automation testing, API calls sometimes fail due to network issues. Write a JavaScript program that simulates retrying a failed API call using a do...while loop. The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). Log each attempt and print the final result.

let maxRetries = 5;
let attempt = 0;
let success = false;

do {
    attempt++;

    let randomValue = Math.random(); // generates value between 0 and 1
    console.log(`Attempt ${attempt} → Random Value: ${randomValue.toFixed(2)}`);

    if (randomValue > 0.6) {   // 40% success chance
        success = true;
        console.log("API Call Successful!");
    } else {
        console.log("API Call Failed. Retrying...");
    }

} while (!success && attempt < maxRetries);

// Final Result
if (success) {
    console.log(`API succeeded after ${attempt} attempt(s).`);
} else {
    console.log("API failed after maximum retry attempts (5).");
}