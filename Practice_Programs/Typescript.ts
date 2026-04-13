// // // // // // // // // // // // // // // // // // // let username: string = "Ankur";
// // // // // // // // // // // // // // // // // // // let age: number = 25;
// // // // // // // // // // // // // // // // // // // let isLoggedIn: boolean = true;

// // // // // // // // // // // // // // // // // // // console.log(`User ${username} is ${25} years old.Logged in: ${isLoggedIn}`);

// // // // // // // // // // // // // // // // // // //---------------------------------

// // // // // // // // // // // // // // // // // // ✅ Q2: API Status Code
// // // // // // // // // // // // // // // // // // let statusCode: number = 200;

// // // // // // // // // // // // // // // // // // 👉 Condition lagao:

// // // // // // // // // // // // // // // // // // 200–299 → "Success"
// // // // // // // // // // // // // // // // // // else → "Fail"

// // // // // // // // // // // // // // // // // let statusCode: number = 300;

// // // // // // // // // // // // // // // // // if (statusCode >= 200 && statusCode < 300) {
// // // // // // // // // // // // // // // // //     console.log("Success");
// // // // // // // // // // // // // // // // // } else {
// // // // // // // // // // // // // // // // //     console.log("Fail");
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // //==========================================================================

// // // // // // // // // // // // // // // // // let browser: string;

// // // // // // // // // // // // // // // // // browser = "Chrome";

// // // // // // // // // // // // // // // // // console.log(`Running test on ${browser}`);

// // // // // // // // // // // // // // // // // browser = "Firefox"

// // // // // // // // // // // // // // // // // console.log(`Running test on ${browser} `);

// // // // // // // // // // // // // // // // //--------------------------------------

// // // // // // // // // // // // // // // // let price: number = 100;
// // // // // // // // // // // // // // // // let taxRate: number = 18

// // // // // // // // // // // // // // // // let finalPrice: number = price + (price * taxRate / 100)

// // // // // // // // // // // // // // // // console.log(`Final Price is ${finalPrice}`);

// // // // // // // // // // // // // // // //-------------------------------

// // // // // // // // // // // // // // // let username: string = "testUser";
// // // // // // // // // // // // // // // let password: string = "1234";

// // // // // // // // // // // // // // // // Check if password is correct
// // // // // // // // // // // // // // // if (password === "1234") {
// // // // // // // // // // // // // // //     console.log(`Logging in with ${username}`);
// // // // // // // // // // // // // // // } else {
// // // // // // // // // // // // // // //     console.log("Invalid password. Login failed.");
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // let responseTime: number = 800;

// // // // // // // // // // // // // // if (responseTime < 1000) {
// // // // // // // // // // // // // //     console.log("Response time is fast")
// // // // // // // // // // // // // // } else {
// // // // // // // // // // // // // //     console.log("Response time is slow")
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // let isVisible: boolean = false;

// // // // // // // // // // // // // if (isVisible) {
// // // // // // // // // // // // //     console.log("Element is Visible");
// // // // // // // // // // // // // } else {
// // // // // // // // // // // // //     console.log("Element is not visible");
// // // // // // // // // // // // // }

// // // // // // // // // // // // //------------------------------Function

// // // // // // // // // // // // function add(a: number, b: number): number {
// // // // // // // // // // // //     return a + b;
// // // // // // // // // // // // }

// // // // // // // // // // // // let sum = add(2, 3)
// // // // // // // // // // // // console.log(`Sum of numbers is ${sum}`);

// // // // // // // // // // // // //-------------------------------------------

// // // // // // // // // // // // function greet(name: string): string {
// // // // // // // // // // // //     return "Hello " + name;
// // // // // // // // // // // // }
// // // // // // // // // // // // console.log(greet("Alice"));
// // // // // // // // // // // // console.log(greet("Bob"));

// // // // // // // // // // // function getResult(status1: number): string {
// // // // // // // // // // //     if (status1 === 200) {
// // // // // // // // // // //         return "Pass";
// // // // // // // // // // //     } else if (status1 === 500) {
// // // // // // // // // // //         return "Fail";

// // // // // // // // // // //     } else {
// // // // // // // // // // //         return "Unknown Status";
// // // // // // // // // // //     }
// // // // // // // // // // // }

// // // // // // // // // // // console.log(getResult(200));
// // // // // // // // // // // console.log(getResult(500));
// // // // // // // // // // // console.log(getResult(404));

// // // // // // // // // // //-------------------------------

// // // // // // // // // // function showConfig(baseurl: string, timeout: number, isHeadless: boolean): void {
// // // // // // // // // //     console.log(`BaseUrl is ${baseurl}`);
// // // // // // // // // //     console.log(`Timeout is ${timeout}`);
// // // // // // // // // //     console.log(`Headless is ${isHeadless}`);
// // // // // // // // // // }

// // // // // // // // // // let baseUrl: string = "https://test.com";
// // // // // // // // // // let timeout: number = 5000;
// // // // // // // // // // let isHeadless: boolean = true;

// // // // // // // // // // showConfig(baseUrl, timeout, isHeadless);

// // // // // // // // // function TestLogin(testname: string, duration: number, isPassed: boolean): void {
// // // // // // // // //     console.log(`Test ${testname} took ${duration}s and result is Passed`);
// // // // // // // // // }

// // // // // // // // // let testName: string = "Login Test";
// // // // // // // // // let duration: number = 3.5;
// // // // // // // // // let isPassed: boolean = true;

// // // // // // // // // TestLogin(testName, duration, isPassed);

// // // // // // // // //-------------

// // // // // // // // let response: number | string;

// // // // // // // // response = 200;
// // // // // // // // console.log(`Response is : ${response}`);

// // // // // // // // response = "Server Error";
// // // // // // // // console.log(`Response is : ${response}`);

// // // // // // // //--------------------------------------
// // // // // // // function printStatus(status: number | string | boolean): string {
// // // // // // //     if (typeof status === "number") {
// // // // // // //         return `Status is: ${status}`;
// // // // // // //     } else if
// // // // // // //         (typeof status === "string") {
// // // // // // //         return "Message failed";
// // // // // // //     } else {
// // // // // // //         return "Unknown status";
// // // // // // //     }
// // // // // // // }

// // // // // // // console.log(printStatus(200));
// // // // // // // console.log(printStatus("Ankur"));
// // // // // // // console.log(printStatus(true));

// // // // // // let browsers: string[] = ["Chrome", "Firefox", "Safari"]

// // // // // // browsers.forEach(browser => {
// // // // // //     console.log(`Running on ${browser}`);
// // // // // // })

// // // // // // //----------------------------------------------
// // // // // // let codes: number[] = [200, 500, 404, 201];

// // // // // // let successcount = 0;
// // // // // // let failcount = 0;

// // // // // // codes.forEach(c => {
// // // // // //     if (c >= 200 && c <= 299) {
// // // // // //         successcount++

// // // // // //     } else {
// // // // // //         failcount++;
// // // // // //     }
// // // // // // });

// // // // // // console.log(`Success: ${successcount}`);
// // // // // // console.log(`Fail:${failcount}`);

// // // // // let results: (number | string)[] = [200, "Fail", 201, "Error"];

// // // // // results.forEach(result => {
// // // // //     if (typeof result === "number") {
// // // // //         console.log("Success");
// // // // //     } else if (typeof result === "string") {
// // // // //         console.log("Fail");
// // // // //     } else {
// // // // //         console.log("Unknown result")
// // // // //     }
// // // // // })

// // // // let user: { username: string; password: string } = {
// // // //     username: "testuser",
// // // //     password: "1234"
// // // // }

// // // // console.log(`Logging in with ${user.username}`);

// // // let apiResponse: { status: number; message: string } = {
// // //     status: 200,
// // //     message: "OK"
// // // };

// // // if (apiResponse.status === 200) {
// // //     console.log("Success")
// // // } else {
// // //     console.log("Fail")
// // // }

// // let testCase: {
// //     name: string;
// //     duration: number;
// //     isPassed: boolean;
// // };

// // testCase =
// // {
// //     name: "Login Test",
// //     duration: 2,
// //     isPassed: true

// // };

// // if (testCase.isPassed) {
// //     console.log(`Test ${testCase.name} -> Passed in ${testCase.duration}s`)
// // } else {
// //     console.log(`Test ${testCase.name} -> Failed in ${testCase.duration}s`)
// // }

// let tests:
//     {
//         name: String; status: "Pass" | "Fail"

//     }[] =
//     [{ name: "Login", status: "Pass" },
//     { name: "Paymenmt", status: "Fail" }]

// tests.forEach(test => {
//     console.log(`${test.name} -> ${test.status}`);
// })

let users: {
    username: string;
    role: "admin" | "user";
}[] = [
        { username: "Ankur", role: "admin" },
        { username: "Rahul", role: "user" }
    ]
users.forEach(user => {
    console.log(`${user.username} is ${user.role}`);
})
