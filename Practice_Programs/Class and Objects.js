// // // // // // class ApiResponse {
// // // // // //     constructor(status1, data) {
// // // // // //         this.status1 = status1;
// // // // // //         this.data = data;

// // // // // //     }

// // // // // //     isSuccess() {
// // // // // //         return this.status1 === 200;
// // // // // //     }
// // // // // // }
// // // // // // let res = new ApiResponse(200, {});
// // // // // // console.log(res.isSuccess());

// // // // // // class ApiResponse {
// // // // // //     constructor(status, data) {
// // // // // //         this.status = status;
// // // // // //         this.data = data;
// // // // // //     }

// // // // // //     isClientError() {
// // // // // //         return this.status >= 400 && this.status <= 499
// // // // // //     }
// // // // // // }

// // // // // // let res = new ApiResponse(404, {});
// // // // // // console.log(res.isClientError());

// // // // // //------------------------------------------

// // // // // // class BrowserTest {
// // // // // //     constructor(browserName) {
// // // // // //         this.browserName = browserName;

// // // // // //     }
// // // // // //     runTest() {
// // // // // //         console.log(`Running test on ${this.browserName}`);
// // // // // //     }
// // // // // // }

// // // // // // let browsers = ["Chrome", "Firefox", "Safari"]

// // // // // // browsers.forEach(b => {
// // // // // //     let test = new BrowserTest(b)
// // // // // //     test.runTest()
// // // // // // });

// // // // // //-----------------------------------------------
// // // // // class ApiValidator {
// // // // //     constructor(code) {
// // // // //         this.code = code;
// // // // //     }

// // // // //     validateStatus() {
// // // // //         return this.code >= 200 && this.code <= 300 ? "Pass" : "Fail";

// // // // //     }
// // // // // }

// // // // // let result = new ApiValidator(200);
// // // // // let result1 = new ApiValidator(301);
// // // // // console.log(result.validateStatus());
// // // // // console.log(result1.validateStatus());

// // // // // //----------------------------------
// // // // // class TestCase {
// // // // //     constructor(name, status) {
// // // // //         this.name = name;
// // // // //         this.status = status;
// // // // //     }

// // // // //     printResult() {
// // // // //         console.log(`${this.name} Test: ${this.status}`);
// // // // //     }

// // // // // }

// // // // // let response = new TestCase("Login", "Pass");

// // // // // response.printResult();

// // // // // //---------------------------------------

// // // // // class ApiCheck {
// // // // //     constructor(statusCode) {
// // // // //         this.statusCode = statusCode;
// // // // //     }

// // // // //     isValid() {
// // // // //         return this.statusCode >= 200 && this.statusCode < 300;
// // // // //     }
// // // // // }

// // // // // let test = new ApiCheck(204);
// // // // // let test1 = new ApiCheck(300);
// // // // // console.log(test.isValid());
// // // // // console.log(test1.isValid());

// // // // //----------------------

// // // // // class User {
// // // // //     constructor(username, password) {
// // // // //         this.username = username;
// // // // //         this.password = password;
// // // // //     }

// // // // //     getDetails() {
// // // // //         return `user: ${this.username}`;
// // // // //     }
// // // // // }
// // // // // let login = new User("admin", "1234");

// // // // // console.log(login.getDetails());

// // // // //---------------------------------------

// // // // class LoginService {
// // // //     constructor(user, pass) {
// // // //         this.user = user;
// // // //         this.pass = pass;
// // // //     }

// // // //     Login() {
// // // //         if (this.user === "admin" && this.pass === "1234") {
// // // //             console.log("Success")


// // // //         } else {
// // // //             console.log("Fail")

// // // //         }

// // // //     }

// // // // }

// // // // let response = new LoginService("admin", "1234")

// // // // response.Login();

// // // class TestRunner {
// // //     constructor(browserName) {
// // //         this.browserName = browserName
// // //     }

// // //     run() {
// // //         console.log(`Running on ${this.browserName}`)
// // //     }
// // // }

// // // let browsers = ["Chrome", "Firefox"]

// // // browsers.forEach(b => {
// // //     let test = new TestRunner(b)
// // //     test.run();
// // // })

// // class ApiReport {
// //     constructor(responses) {
// //         this.responses = responses;
// //     }

// //     getSummary() {
// //         let success = 0;
// //         let fail = 0;

// //         this.responses.forEach(code => {
// //             if (code >= 200 && code < 300) {
// //                 success++;
// //             } else {
// //                 fail++;
// //             }
// //         });
// //         console.log(`Success = ${success}`);
// //         console.log(`Fail = ${fail}`);
// //     }

// // }

// // let responses = [200, 500, 201, 404];

// // let result = new ApiReport(responses);

// // result.getSummary();

// class Detailreport {
//     constructor(response) {
//         this.response = response
//     }

//     getDetailedReport() {
//         this.response.forEach(code => {
//             if (code >= 200 && code < 300) {
//                 console.log("Success")
//             } else {
//                 console.log("Fail")
//             }
//         });
//     }
// }

// let responses = [200, 500, 201, 404];

// let result = new Detailreport(responses)

// result.getDetailedReport();

//=========================================

class Cart {
    constructor() {
        this.items = []
    }

    additem(item) {
        this.items.push(item);
    }

    getTotalitems() {
        return this.items.length;
    }
}
let cart = new Cart();

cart.additem("Shoes");
cart.additem("T-shirt");

console.log(cart.getTotalitems()); 