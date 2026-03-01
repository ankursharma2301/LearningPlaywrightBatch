// 

const responseTimes = [120, 230, 450, 510, 180, 620, 340, 780, 290, 150, 530, 410];
const SLA_LIMIT = 500;

let min = responseTimes[0];
let max = responseTimes[0];
let totalTime = 0;
let breachCount = 0;
let index = 0;

console.log("Checking SLA breaches (threshold: " + SLA_LIMIT + "ms)...");
console.log("");

while (index < responseTimes.length) {
  const current = responseTimes[index];

  if (current < min) { min = current; }
  if (current > max) { max = current; }

  totalTime += current;

  if (current > SLA_LIMIT) {
    breachCount++;
    console.log("  ⚠️ SLA BREACH at request #" + (index + 1) + ": " + current + "ms");
  }

  index++;
}

const average = (totalTime / responseTimes.length).toFixed(2);
const breachPercentage = ((breachCount / responseTimes.length) * 100).toFixed(2);

console.log("");
console.log("===== PERFORMANCE REPORT =====");
console.log("Total Requests   : " + responseTimes.length);
console.log("Min Response     : " + min + "ms");
console.log("Max Response     : " + max + "ms");
console.log("Avg Response     : " + average + "ms");
console.log("SLA Threshold    : " + SLA_LIMIT + "ms");
console.log("SLA Breaches     : " + breachCount + " (" + breachPercentage + "%)");