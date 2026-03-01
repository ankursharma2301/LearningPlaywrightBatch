// Retry Failed API Call
// In automation testing, API calls sometimes fail due to network issues. Write a JavaScript program that simulates retrying a failed API call using a do...while loop. The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). Log each attempt and print the final result.

const MAX_ATTEMPTS = 5;
let attemptNumber = 0;
let isSuccess = false;

console.log("Starting API call with retry logic...");
console.log("");

do {
    attemptNumber++;
    const randomValue = Math.random();
    isSuccess = randomValue > 0.6;

    if (isSuccess) {
        console.log("Attempt " + attemptNumber + ": ✅ SUCCESS (Response 200 OK)");
    } else {
        console.log("Attempt " + attemptNumber + ": ❌ FAILED (Timeout/Error)");
    }
} while (!isSuccess && attemptNumber < MAX_ATTEMPTS);

console.log("");
console.log("--- Final Result ---");

if (isSuccess) {
    console.log("API call PASSED after " + attemptNumber + " attempt(s).");
} else {
    console.log("API call FAILED after " + attemptNumber + " attempts. Max retries exhausted.");
    console.log("ACTION: Raise a bug - API is unreliable.");
}