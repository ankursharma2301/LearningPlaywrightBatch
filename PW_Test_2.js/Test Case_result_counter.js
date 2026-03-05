// Test Case Result Counter - Simple 2
// After a test suite runs, yoyhu receive an array of test results (strings: "pass", "fail", "skip"). Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. Print a test report with total tests, counts, pass rate percentage, and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).

const testResults = [
    "pass", "pass", "fail", "pass", "skip",
    "pass", "fail", "pass", "pass", "skip",
    "pass", "pass", "fail", "pass", "pass"
];

let passCount = 0;
let failCount = 0;
let skipCount = 0;

for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passCount++;
    } else if (testResults[i] === "fail") {
        failCount++;
    } else if (testResults[i] === "skip") {
        skipCount++;
    }
}

const totalTests = testResults.length;
const passRate = ((passCount / totalTests) * 100).toFixed(2);

console.log("========= TEST REPORT =========");
console.log("Total Tests : " + totalTests);
console.log("Passed      : " + passCount);
console.log("Failed      : " + failCount);
console.log("Skipped     : " + skipCount);
console.log("Pass Rate   : " + passRate + "%");
console.log("================================");

if (failCount === 0) {
    console.log("✅ VERDICT: All tests passed. Ready for release.");
} else if (failCount <= 2) {
    console.log("⚠️ VERDICT: Minor failures. Review before release.");
} else {
    console.log("❌ VERDICT: Too many failures. Block release.");
}