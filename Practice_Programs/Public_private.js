// // // // // // // // // ✅ Public & Private Variables
// // // // // // // // // Create a class User
// // // // // // // // // public variable: name
// // // // // // // // // private variable: #password
// // // // // // // // // method: login() → print name and masked password (****)

// // // // // // // // class User {
// // // // // // // //     name; // public
// // // // // // // //     #password // private
// // // // // // // //     constructor(name, password) {
// // // // // // // //         this.name = name;
// // // // // // // //         this.#password = password;
// // // // // // // //     }

// // // // // // // //     getMaskedPassword() {
// // // // // // // //         return "*".repeat(this.#password.length)
// // // // // // // //     }

// // // // // // // //     login() {
// // // // // // // //         console.log(`User:${this.name}`)
// // // // // // // //         console.log(`Password:${this.getMaskedPassword()}`);
// // // // // // // //     }
// // // // // // // // }

// // // // // // // // let user = new User("Ankur", "abcdef");

// // // // // // // // user.login();

// // // // // // // // Create a class Browser

// // // // // // // // public: browserName
// // // // // // // // private: #version
// // // // // // // // method: getBrowserInfo() → print both

// // // // // // // class Browser {
// // // // // // //     browserName;
// // // // // // //     #version;

// // // // // // //     constructor(browsername, version) {
// // // // // // //         this.browserName = browsername;
// // // // // // //         this.#version = version;
// // // // // // //     }

// // // // // // //     getBrowserInfo() {
// // // // // // //         console.log(`Browser name is -> ${this.browserName}`);
// // // // // // //         console.log(`Version of browser is -> ${this.#version}`);
// // // // // // //     }
// // // // // // // }

// // // // // // // let b = new Browser("Chrome", 54.2);

// // // // // // // b.getBrowserInfo();

// // // // // // 🧪 4. API Request Class

// // // // // // Create class ApiRequest

// // // // // // public: endpoint
// // // // // // private: #authToken
// // // // // // method: sendRequest()

// // // // // class ApiRequest {
// // // // //     endpoint;
// // // // //     #authToken;

// // // // //     constructor(endPoint, AuthToken) {
// // // // //         this.endpoint = endPoint;
// // // // //         this.#authToken = AuthToken;
// // // // //     }

// // // // //     getMaskedToken() {
// // // // //         return "**".repeat(this.#authToken.length)
// // // // //     }

// // // // //     sendRequest() {
// // // // //         console.log(`Calling ${this.endpoint} with ${this.getMaskedToken()}`);
// // // // //     }
// // // // // }

// // // // // let request = new ApiRequest("/users", "abcdef1234");

// // // // // request.sendRequest();
// // // // 🧪 5. Test Case Class

// // // // Create class TestCase

// // // // public: testName
// // // // private: #testData
// // // // method: runTest()

// // // class TestCase {
// // //     testName;
// // //     #testData;

// // //     constructor(testname, testdata) {
// // //         this.testName = testname;
// // //         this.#testData = testdata;
// // //     }
// // //     getMaskedTestData() {
// // //         return "*".repeat(this.#testData.length)
// // //     }

// // //     runTest() {
// // //         console.log(`Running test:${this.testName} with ${this.getMaskedTestData()}`)

// // //     }
// // // }

// // // let test = new TestCase("Login Test", "user123@password");
// // // test.runTest();

// // // 🧪 7. Page Object Model (Login Page)

// // // Create class LoginPage

// // // public: url
// // // private: #password
// // // method: performLogin()

// // class LoginPage {
// //     url;
// //     #password;

// //     constructor(URL, Password) {
// //         this.url = URL;
// //         this.#password = Password;
// //     }

// //     getMaskedPassword() {
// //         return "*".repeat(this.#password.length)
// //     }

// //     performLogin() {
// //         console.log(`Navigating to this URL:${this.url}`);
// //         console.log(`Entering the password:${this.getMaskedPassword()}`);
// //         console.log("Login Successfull");
// //     }
// // }

// // let loginPage = new LoginPage("https://example.com/login", "mySecret123");

// // loginPage.performLogin();

// 9. Test Report

// Create class Report

// public: testSuiteName
// private: #results
// method: addResult(result)
// method: getSummary()

class Report {
    testSuiteName;
    #results;

    constructor(testSuitename) {
        this.testSuiteName = testSuitename;
        this.#results = [];
    }

    addResult(result) {
        this.#results.push(result);
    }

    getSummary() {
        let passCount = 0;
        let failCount = 0;

        for (let res of this.#results) {
            if (res === "PASS") {
                passCount++;
            } else {
                failCount++;
            }
        }
        console.log(`Test Suite: ${this.testSuiteName}`);
        console.log(`Total: ${this.#results.length}`);
        console.log(`Passed: ${passCount}`);
        console.log(`Failed: ${failCount}`);
    }
}

let report = new Report("Login Suite");
report.addResult("PASS");
report.addResult("FAIL");
report.addResult("PASS");
report.getSummary();

