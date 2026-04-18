// // // // // // // class User {
// // // // // // //     public username: string
// // // // // // //     private password: string

// // // // // // //     constructor(username: string, password: string) {
// // // // // // //         this.username = username;
// // // // // // //         this.password = password;
// // // // // // //     }

// // // // // // //     login(): string {
// // // // // // //         if (this.password === "1234") {
// // // // // // //             return "Login Success"
// // // // // // //         } else {
// // // // // // //             return "Login Failed"
// // // // // // //         }
// // // // // // //     }
// // // // // // //     getMaskedPassword(): string {
// // // // // // //         return "*".repeat(this.password.length)

// // // // // // //     }
// // // // // // // }

// // // // // // // let response = new User("Ankur", "1234");

// // // // // // // console.log(response.login());

// // // // // // // console.log(response.getMaskedPassword());

// // // // // // class BasePage {
// // // // // //     protected url: string;

// // // // // //     constructor(url: string) {
// // // // // //         this.url = url;
// // // // // //     }
// // // // // // }

// // // // // // class LoginPage extends BasePage {
// // // // // //     openPage(): string {
// // // // // //         return `Opening ${this.url}`

// // // // // //     }
// // // // // // }

// // // // // // let openUrl = new LoginPage("https://google.com/login");

// // // // // // console.log(openUrl.openPage());
// // // // // ✅ Question 4 (Basic Function)

// // // // // 👉 Function banao:

// // // // // multiply(a: number, b: number): number

// // // // function multiply(a: number, b: number): number {
// // // //     return a * b;
// // // // }

// // // // console.log(`Multiplication of two number is :${multiply(2, 3)}`);

// // // function checkStatus(status: number | string): string {
// // //     return `Status is : ${status}`;

// // // }

// // // console.log(checkStatus("200"));
// // // console.log(checkStatus("OK"));
// // ✅ Question 6 (Real QA Logic)

// // 👉 Function:

// // validateLogin(token?: string): string

// // Rules:

// // agar token hai → "Login Success"
// // nahi hai → "Login Failed"

// function validateLogin(token?: string): string {
//     if (token) {
//         return "Login Sucess";
//     } else {
//         return "Login Failed";
//     }

// }

// console.log(validateLogin("abcdef"));
// console.log(validateLogin());

class LoginService {
    public username: string;
    public password: string

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    login(): string {
        if (this.username === "ankursharma2301" && this.password === "admin1234") {
            return "Success";
        } else {
            return "Fail";
        }
    }
}

let checklogin = new LoginService("ankursharma2301", "admin1234")

console.log(checklogin.login());

// class LoginService {
//     login(username: string, password: string): string {
//         if (username === "admin" && password === "1234") {
//             return "Success";
//         } else {
//             return "Fail";
//         }
//     }
// }

// let checklogin = new LoginService();

// console.log(checklogin.login("admin", "1234")); // Success
// console.log(checklogin.login("user", "0000"));  // Fail