// Mini Test Suite Runner
// Build a mini test suite runner that executes test cases and generates a summary report. This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop, do...while, operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

// Each test case has a name, expected value, actual value, and comparison type (strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests, track pass/fail/error counts, find consecutive passes from start (while loop), find first failure (do...while), and print a comprehensive report.

// const → test cases (fixed data)
const testCases = [
    { name: "Strict Equality Pass", expected: 5, actual: 5, type: "strictEqual" },
    { name: "Loose Equality Pass", expected: 5, actual: "5", type: "looseEqual" },
    { name: "Type Check", expected: "number", actual: 10, type: "typeCheck" },
    { name: "Truthy Check", expected: true, actual: "Hello", type: "truthy" },
    { name: "Less Than", expected: 10, actual: 5, type: "lessThan" },
    { name: "Strict Equality Fail", expected: 7, actual: "7", type: "strictEqual" }
];

// var → global counters
var passCount = 0;
var failCount = 0;
var errorCount = 0;

// let → loop variable
for (let i = 0; i < testCases.length; i++) {

    let test = testCases[i];
    let result;
    let status = "FAIL";

    try {

        switch (test.type) {

            case "strictEqual":
                result = (test.actual === test.expected);
                break;

            case "looseEqual":
                result = (test.actual == test.expected);
                break;

            case "typeCheck":
                result = (typeof test.actual === test.expected);
                break;

            case "truthy":
                result = (!!test.actual === true);
                break;

            case "lessThan":
                result = (test.actual < test.expected);
                break;

            default:
                throw "Unknown comparison type";
        }

        // ternary operator
        status = result ? "PASS" : "FAIL";

        // logical operators
        if (status === "PASS" && result === true) {
            passCount++;
        } else if (status !== "PASS" || result === false) {
            failCount++;
        }

    } catch (e) {
        console.log("Error in test:", test.name);
        errorCount++;
        continue;
    }

    console.log(`Test: ${test.name ?? "Unnamed Test"} → ${status}`);
}

// -------- WHILE LOOP --------
// Find consecutive passes from start
let consecutivePasses = 0;
let index = 0;

while (index < testCases.length) {

    if (index < passCount) {
        consecutivePasses++;
    } else {
        break;
    }

    index++;
}

// -------- DO...WHILE LOOP --------
// Find first failure index
let firstFailureIndex = -1;
let j = 0;

do {

    let test = testCases[j];

    let isFail = false;

    switch (test.type) {

        case "strictEqual":
            isFail = !(test.actual === test.expected);
            break;

        case "looseEqual":
            isFail = !(test.actual == test.expected);
            break;

        case "typeCheck":
            isFail = !(typeof test.actual === test.expected);
            break;

        case "truthy":
            isFail = !test.actual;
            break;

        case "lessThan":
            isFail = !(test.actual < test.expected);
            break;
    }

    if (isFail) {
        firstFailureIndex = j;
        break;
    }

    j++;

} while (j < testCases.length);

// -------- FINAL REPORT --------

console.log("\n===== TEST SUITE SUMMARY =====");
console.log("Total Tests:", testCases.length);
console.log("Passed:", passCount);
console.log("Failed:", failCount);
console.log("Errors:", errorCount);
console.log("Consecutive Passes from Start:", consecutivePasses);
console.log("First Failure Index:", firstFailureIndex);