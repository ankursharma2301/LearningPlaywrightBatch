// Login Brute-Force Detection
// Write a JavaScript program that simulates a login system with brute-force detection. The system should lock the account after 3 consecutive failed attempts. Use a do...while loop to process login attempts from an array. Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). Validate using strict equality (===) and logical operators (&&).
// const → fixed credentials & threshold
const VALID_USERNAME = "admin@testingacademy.com";
const VALID_PASSWORD = "Test@1234";
const MAX_FAILED_ATTEMPTS = 3;

var totalLoginAttempts = 0;

let failedStreak = 0;
let isLoggedIn = false;
let isLocked = false;
let index = 0;

const loginAttempts = [
  { username: "admin@testingacademy.com", password: "wrong123" },
  { username: "hacker@evil.com",          password: "password" },
  { username: "admin@testingacademy.com", password: "guess456" },
  { username: "admin@testingacademy.com", password: "Test@1234" },
];

console.log("===== LOGIN SECURITY TEST =====");
console.log("");

do {
  const attempt = loginAttempts[index];
  totalLoginAttempts++;

  if (isLocked) {
    console.log("Attempt " + (index + 1) + ": 🔒 ACCOUNT LOCKED - Rejected");
    index++;
    continue;
  }

  if (attempt.username === VALID_USERNAME && attempt.password === VALID_PASSWORD) {
    isLoggedIn = true;
    failedStreak = 0;
    console.log("Attempt " + (index + 1) + ": ✅ LOGIN SUCCESS - Welcome!");
  } else {
    failedStreak++;

    let reason = "";
    if (attempt.username !== VALID_USERNAME) { reason += "wrong username"; }
    if (attempt.password !== VALID_PASSWORD) { reason += reason ? " & wrong password" : "wrong password"; }

    console.log("Attempt " + (index + 1) + ": ❌ FAILED (" + reason + ") - Strike " + failedStreak + "/" + MAX_FAILED_ATTEMPTS);

    if (failedStreak >= MAX_FAILED_ATTEMPTS) {
      isLocked = true;
      console.log("");
      console.log("🚨 SECURITY ALERT: Account locked after " + MAX_FAILED_ATTEMPTS + " failed attempts!");
    }
  }

  index++;
} while (index < loginAttempts.length && !isLoggedIn);

console.log("");
console.log("--- Summary ---");
console.log("Total attempts processed : " + index);
console.log("Account locked           : " + isLocked);
console.log("Login successful         : " + isLoggedIn);
console.log("Global attempt counter   : " + totalLoginAttempts + " (var - global scope)");