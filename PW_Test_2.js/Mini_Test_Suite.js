// Mini Test Suite Runner
// Build a mini test suite runner that executes test cases and generates a summary report. This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop, do...while, operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

// Each test case has a name, expected value, actual value, and comparison type (strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests, track pass/fail/error counts, find consecutive passes from start (while loop), find first failure (do...while), and print a comprehensive report.

// const → test cases (fixed data)
const SUITE_NAME = "API Smoke Tests - Sprint 42";
const startTime = Date.now();

var suiteRunCount = 0;
suiteRunCount++;

const testCases = [
  { name: "Status code is 200",           actual: 200,                  expected: 200,      type: "strictEqual" },
  { name: "Response body is string",      actual: "success",            expected: "string",  type: "typeCheck" },
  { name: "User ID is not null",          actual: 1024,                 expected: true,      type: "truthy" },
  { name: "String '5' loosely equals 5",  actual: "5",                  expected: 5,         type: "looseEqual" },
  { name: "String '5' strictly equals 5", actual: "5",                  expected: 5,         type: "strictEqual" },
  { name: "Auth token is present",        actual: "Bearer eyJhbGc...",  expected: true,      type: "truthy" },
  { name: "Error count is zero",          actual: 0,                    expected: 0,         type: "strictEqual" },
  { name: "Response is under 500ms",      actual: 320,                  expected: 500,       type: "lessThan" },
  { name: "Empty string is truthy",       actual: "",                   expected: true,      type: "truthy" },
  { name: "Array type is object",         actual: typeof [1, 2],        expected: "object",  type: "strictEqual" },
];

let passCount = 0;
let failCount = 0;
let errorCount = 0;
const results = [];

console.log("==================================================");
console.log("🧪 TEST SUITE: " + SUITE_NAME + " (Run #" + suiteRunCount + ")");
console.log("==================================================");
console.log("");

for (let i = 0; i < testCases.length; i++) {
  const tc = testCases[i];
  let isPassed;
  let message;

  if (typeof tc.name !== "string" || tc.name.length === 0) {
    errorCount++;
    const errorName = tc.name ?? "UNNAMED";
    console.log("  ⚠️ TC-" + String(i + 1).padStart(2, "0") + ": " + errorName + " → ERROR (missing name)");
    results.push({ index: i + 1, name: errorName, status: "ERROR" });
    continue;
  }

  switch (tc.type) {
    case "strictEqual":
      isPassed = tc.actual === tc.expected;
      message = isPassed ? tc.actual + " === " + tc.expected : "Expected " + tc.expected + " but got " + tc.actual + " (strict)";
      break;
    case "looseEqual":
      isPassed = tc.actual == tc.expected;
      message = isPassed ? tc.actual + " == " + tc.expected : "Expected " + tc.expected + " but got " + tc.actual + " (loose)";
      break;
    case "typeCheck":
      isPassed = typeof tc.actual === tc.expected;
      message = isPassed ? "typeof value is '" + tc.expected + "'" : "Expected type '" + tc.expected + "' but got '" + typeof tc.actual + "'";
      break;
    case "truthy":
      isPassed = !!tc.actual === true;
      message = isPassed ? tc.actual + " is truthy" : tc.actual + " is falsy (expected truthy)";
      break;
    case "lessThan":
      isPassed = tc.actual < tc.expected;
      message = isPassed ? tc.actual + " < " + tc.expected : tc.actual + " is NOT less than " + tc.expected;
      break;
    default:
      isPassed = false;
      message = "Unknown comparison type: " + tc.type;
  }

  let status;
  if (isPassed) { status = "PASS"; passCount++; }
  else { status = "FAIL"; failCount++; }

  const icon = status === "PASS" ? "✅" : "❌";
  console.log("  " + icon + " TC-" + String(i + 1).padStart(2, "0") + ": " + tc.name + " → " + status + " (" + message + ")");
  results.push({ index: i + 1, name: tc.name, status: status });
}

let consecutivePasses = 0;
let idx = 0;
while (idx < results.length && results[idx].status === "PASS") {
  consecutivePasses++;
  idx++;
}

let firstFailureName = "None";
let searchIdx = 0;
let foundFailure = false;

do {
  if (results[searchIdx] && results[searchIdx].status === "FAIL") {
    firstFailureName = "TC-" + results[searchIdx].index + ": " + results[searchIdx].name;
    foundFailure = true;
  }
  searchIdx++;
} while (!foundFailure && searchIdx < results.length);

const endTime = Date.now();
const duration = endTime - startTime;
const totalTests = passCount + failCount + errorCount;
const passRate = totalTests > 0 ? ((passCount / totalTests) * 100).toFixed(2) : "0.00";

const overallStatus = (failCount === 0 && errorCount === 0) ? "PASSED" : "FAILED";
const overallIcon = overallStatus === "PASSED" ? "✅" : "❌";

console.log("");
console.log("--------------------------------------------------");
console.log("📊 REPORT: " + SUITE_NAME);
console.log("--------------------------------------------------");
console.log("Total Tests          : " + totalTests);
console.log("Passed               : " + passCount);
console.log("Failed               : " + failCount);
console.log("Errors               : " + errorCount);
console.log("Pass Rate            : " + passRate + "%");
console.log("Consecutive Passes   : " + consecutivePasses + " (from start)");
console.log("First Failure        : " + firstFailureName);
console.log("Duration             : " + duration + "ms");
console.log("Overall              : " + overallIcon + " " + overallStatus);
console.log("Suite Run Count      : " + suiteRunCount + " (var - global scope)");
console.log("==================================================");