// Login Brute-Force Detection
// Write a JavaScript program that simulates a login system with brute-force detection. The system should lock the account after 3 consecutive failed attempts. Use a do...while loop to process login attempts from an array. Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). Validate using strict equality (===) and logical operators (&&).
// const → fixed credentials & threshold
const validUsername = "admin";
const validPassword = "12345";
const MAX_ATTEMPTS = 3;

// var → global failed attempt counter
var failedAttempts = 0;

// Simulated login attempts
let loginAttempts = [
    { username: "admin", password: "11111" },
    { username: "admin", password: "22222" },
    { username: "admin", password: "12345" }, // correct but after 2 fails
    { username: "admin", password: "12345" }
];

let index = 0;
let accountLocked = false;

do {

    let attempt = loginAttempts[index];

    console.log("Attempt:", index + 1);

    // Validate using strict equality and logical AND
    if (attempt.username === validUsername && attempt.password === validPassword) {

        if (failedAttempts < MAX_ATTEMPTS) {
            console.log("Login Successful ✅");
            break;
        }

    } else {

        failedAttempts++;
        console.log("Login Failed ❌");

        if (failedAttempts === MAX_ATTEMPTS) {
            accountLocked = true;
            console.log("Account Locked 🔒 due to 3 consecutive failed attempts.");
            break;
        }
    }

    index++;

} while (index < loginAttempts.length);

if (!accountLocked && failedAttempts < MAX_ATTEMPTS) {
    console.log("System Ended Normally");
}