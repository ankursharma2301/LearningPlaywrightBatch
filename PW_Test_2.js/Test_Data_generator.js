// Test Data Generator
// As an SDET, you frequently need to generate test data for form testing. Write a JavaScript program that generates test user data using a for loop. Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing). Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).

// var → global counter (function scoped)
var globalCounter = 1;

// const → fixed values (won't change)
const roles = ["admin", "editor", "viewer", "tester", "manager"];
const totalUsers = 15;

// Array to store generated users
let users = [];

for (let i = 0; i < totalUsers; i++) {
    // let → block scoped loop variables
    let idNumber = String(globalCounter).padStart(4, "0");
    let userId = `USR-${idNumber}`;

    let name = `User${globalCounter}`;
    let email = `user${globalCounter}@test.com`;

    // Role cycles automatically
    let role = roles[i % roles.length];

    // Every 3rd user inactive (edge case)
    let isActive = (globalCounter % 3 !== 0);

    users.push({
        id: userId,
        name: name,
        email: email,
        role: role,
        isActive: isActive
    });

    globalCounter++;
}

console.log(users);