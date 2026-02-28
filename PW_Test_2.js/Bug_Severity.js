// Bug Severity Classifier
// As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that prints the bug severity level.

// Classification Matrix:
// - always + blocker → P0 | always + major → P1 | always + minor → P2
// - often + blocker → P1 | often + major → P2 | often + minor → P3
// - rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

function classifyBug(frequency, impact) {

    if (frequency === "always") {

        if (impact === "blocker") {
            console.log("Severity: P0");
        } 
        else if (impact === "major") {
            console.log("Severity: P1");
        } 
        else if (impact === "minor") {
            console.log("Severity: P2");
        } 
        else {
            console.log("Invalid impact value");
        }

    } 
    else if (frequency === "often") {

        if (impact === "blocker") {
            console.log("Severity: P1");
        } 
        else if (impact === "major") {
            console.log("Severity: P2");
        } 
        else if (impact === "minor") {
            console.log("Severity: P3");
        } 
        else {
            console.log("Invalid impact value");
        }

    } 
    else if (frequency === "rarely") {

        if (impact === "blocker") {
            console.log("Severity: P2");
        } 
        else if (impact === "major") {
            console.log("Severity: P3");
        } 
        else if (impact === "minor") {
            console.log("Severity: P4");
        } 
        else {
            console.log("Invalid impact value");
        }

    } 
    else {
        console.log("Invalid frequency value");
    }
}

// Example Calls
classifyBug("always", "blocker"); // P0
classifyBug("often", "minor");    // P3
classifyBug("rarely", "major");   // P3