// 

function analyzeResponseTimes(responseTimes) {

    let i = 0;
    let min = responseTimes[0];
    let max = responseTimes[0];
    let sum = 0;
    let breachCount = 0;
    let slaThreshold = 500;

    while (i < responseTimes.length) {

        let currentTime = responseTimes[i];

        // Track Minimum
        if (currentTime < min) {
            min = currentTime;
        }

        // Track Maximum
        if (currentTime > max) {
            max = currentTime;
        }

        // Calculate Sum
        sum = sum + currentTime;

        // Check SLA Breach
        if (currentTime > slaThreshold) {
            breachCount++;
        }

        i++;
    }

    let average = sum / responseTimes.length;

    console.log("----- Performance Report -----");
    console.log("Minimum Response Time:", min, "ms");
    console.log("Maximum Response Time:", max, "ms");
    console.log("Average Response Time:", average.toFixed(2), "ms");
    console.log("SLA Breaches (>500ms):", breachCount);
}


// Example Data
let apiResponses = [120, 450, 600, 300, 800, 200, 510];

analyzeResponseTimes(apiResponses);