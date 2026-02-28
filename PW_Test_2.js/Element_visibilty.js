// 

function checkElementState(isPresent, isDisplayed, isEnabled) {

    let state;
    let action;
    let severity;

    // Determine State
    if (isPresent === true && isDisplayed === true && isEnabled === true) {
        state = "READY";
        action = "Safe to interact with the element.";
    }
    else if (isPresent === true && isDisplayed === true && isEnabled === false) {
        state = "DISABLED";
        action = "Element is visible but disabled. Cannot click.";
    }
    else if (isPresent === true && isDisplayed === false) {
        state = "HIDDEN";
        action = "Element is hidden. Wait or scroll into view.";
    }
    else if (isPresent === false) {
        state = "NOT FOUND";
        action = "Locator might be incorrect. Check DOM.";
    }

    // Determine Severity using ternary operator
    severity = (isPresent === false)
        ? "CRITICAL "
        : (isDisplayed === false || isEnabled === false)
            ? "WARNING "
            : "OK ";

    // Print Report
    console.log("----- Element Status Report -----");
    console.log("State:", state);
    console.log("Severity:", severity);
    console.log("Suggested Action:", action);
}
checkElementState(false, false, false);