// // // // // // // // // // // // class User {
// // // // // // // // // // // //     public username: string
// // // // // // // // // // // //     private password: string

// // // // // // // // // // // //     constructor(username: string, password: string) {
// // // // // // // // // // // //         this.username = username;
// // // // // // // // // // // //         this.password = password;
// // // // // // // // // // // //     }

// // // // // // // // // // // //     login(): string {
// // // // // // // // // // // //         if (this.password === "1234") {
// // // // // // // // // // // //             return "Login Success"
// // // // // // // // // // // //         } else {
// // // // // // // // // // // //             return "Login Failed"
// // // // // // // // // // // //         }
// // // // // // // // // // // //     }
// // // // // // // // // // // //     getMaskedPassword(): string {
// // // // // // // // // // // //         return "*".repeat(this.password.length)

// // // // // // // // // // // //     }
// // // // // // // // // // // // }

// // // // // // // // // // // // let response = new User("Ankur", "1234");

// // // // // // // // // // // // console.log(response.login());

// // // // // // // // // // // // console.log(response.getMaskedPassword());

// // // // // // // // // // // class BasePage {
// // // // // // // // // // //     protected url: string;

// // // // // // // // // // //     constructor(url: string) {
// // // // // // // // // // //         this.url = url;
// // // // // // // // // // //     }
// // // // // // // // // // // }

// // // // // // // // // // // class LoginPage extends BasePage {
// // // // // // // // // // //     openPage(): string {
// // // // // // // // // // //         return `Opening ${this.url}`

// // // // // // // // // // //     }
// // // // // // // // // // // }

// // // // // // // // // // // let openUrl = new LoginPage("https://google.com/login");

// // // // // // // // // // // console.log(openUrl.openPage());
// // // // // // // // // // ✅ Question 4 (Basic Function)

// // // // // // // // // // 👉 Function banao:

// // // // // // // // // // multiply(a: number, b: number): number

// // // // // // // // // function multiply(a: number, b: number): number {
// // // // // // // // //     return a * b;
// // // // // // // // // }

// // // // // // // // // console.log(`Multiplication of two number is :${multiply(2, 3)}`);

// // // // // // // // function checkStatus(status: number | string): string {
// // // // // // // //     return `Status is : ${status}`;

// // // // // // // // }

// // // // // // // // console.log(checkStatus("200"));
// // // // // // // // console.log(checkStatus("OK"));
// // // // // // // ✅ Question 6 (Real QA Logic)

// // // // // // // 👉 Function:

// // // // // // // validateLogin(token?: string): string

// // // // // // // Rules:

// // // // // // // agar token hai → "Login Success"
// // // // // // // nahi hai → "Login Failed"

// // // // // // function validateLogin(token?: string): string {
// // // // // //     if (token) {
// // // // // //         return "Login Sucess";
// // // // // //     } else {
// // // // // //         return "Login Failed";
// // // // // //     }

// // // // // // }

// // // // // // console.log(validateLogin("abcdef"));
// // // // // // console.log(validateLogin());

// // // // // class LoginService {
// // // // //     public username: string;
// // // // //     public password: string

// // // // //     constructor(username: string, password: string) {
// // // // //         this.username = username;
// // // // //         this.password = password;
// // // // //     }

// // // // //     login(): string {
// // // // //         if (this.username === "ankursharma2301" && this.password === "admin1234") {
// // // // //             return "Success";
// // // // //         } else {
// // // // //             return "Fail";
// // // // //         }
// // // // //     }
// // // // // }

// // // // // let checklogin = new LoginService("ankursharma2301", "admin1234")

// // // // // console.log(checklogin.login());

// // // // // // class LoginService {
// // // // // //     login(username: string, password: string): string {
// // // // // //         if (username === "admin" && password === "1234") {
// // // // // //             return "Success";
// // // // // //         } else {
// // // // // //             return "Fail";
// // // // // //         }
// // // // // //     }
// // // // // // }

// // // // // // let checklogin = new LoginService();

// // // // // // console.log(checklogin.login("admin", "1234")); // Success
// // // // // // console.log(checklogin.login("user", "0000"));  // Fail

// // // // class LoginPage {
// // // //     constructor(private page: any) { }

// // // //     enterUsername(username: string): string {
// // // //         return `Enter Username:${username}`;
// // // //     }
// // // //     enterPassword(password: string): string {
// // // //         return `Enter password:${password}`;
// // // //     }

// // // //     clickLogin() {
// // // //         return "Click on Logn button"
// // // //     }

// // // //     login(username: string, password: string) {
// // // //         this.enterUsername(username);
// // // //         this.enterPassword(password);
// // // //         this.clickLogin();

// // // //         if (username === "admin1234" && password === "1234") {
// // // //             return "Login Success";
// // // //         } else {
// // // //             return "Login Failed";
// // // //         }
// // // //     }
// // // // }


// // // class User {
// // //     username: string;
// // //     role: "admin" | "user";
// // //     private isLoggedIn: boolean;

// // //     constructor(username: string, role: "admin" | "user") {
// // //         this.username = username;
// // //         this.role = role;
// // //         this.isLoggedIn = false; // default
// // //     }

// // //     login(): void {
// // //         this.isLoggedIn = true;
// // //     }

// // //     logout(): void {
// // //         this.isLoggedIn = false;
// // //     }

// // //     getAccess(): string {
// // //         if (!this.isLoggedIn) return "No Access";
// // //         return this.role === "admin" ? "Full Access" : "Limited Access";
// // //     }
// // // }

// // // // Usage
// // // let adminuser = new User("Ankur", "admin");
// // // console.log(adminuser.getAccess()); // No Access

// // // adminuser.login();
// // // console.log(adminuser.getAccess()); // Full Access

// // // let normaluser = new User("john", "user");
// // // normaluser.login();
// // // console.log(normaluser.getAccess()); // Limited Access


// // class RetryHelper {
// //     private maxRetry: number
// //     constructor(maxRetry: number) {
// //         this.maxRetry = maxRetry;
// //     }

// //     retry(taskName: string): string {
// //         for (let i = 1; i <= this.maxRetry; i++) {
// //             console.log(`Retrying ${taskName}....Attempt ${i}`);

// //         }
// //         return `${taskName} completed after ${this.maxRetry} attempts`;
// //     }
// // }

// // let retryHelper = new RetryHelper(3);

// // console.log(retryHelper.retry("Login Test"));

// // //===========================================
// // class BasePage {
// //     load(): string {
// //         return "Load Base Page"
// //     }
// // }

// // class DashboardPage extends BasePage {
// //     load(): string {
// //         return super.load() + " → Dashboard Loaded";

// //     }
// // }

// // let page = new DashboardPage();
// // console.log(page.load());

// // //---------------------------------
// // class BankAccount {
// //     private balance: number;

// //     constructor(initialBalance: number = 0) {
// //         this.balance = initialBalance;
// //     }

// //     deposit(amount: number): void {
// //         this.balance += amount;
// //     }

// //     withdraw(amount: number): string {
// //         if (amount > this.balance) {
// //             return "Insufficient funds"
// //         }
// //         this.balance -= amount;
// //         return "WithDraw Succesfull"
// //     }
// //     getbalance(): number {
// //         return this.balance;
// //     }
// // }

// // let account = new BankAccount(500);

// // account.deposit(500);
// // console.log(account.getbalance());

// // account.withdraw(700);
// // console.log(account.getbalance());

// // console.log(account.withdraw(2000)); // Insufficient Funds
// // console.log(account.getbalance()); // 1300 (unchanged)

// // //----------------------------------

// // function handleStatus(code: number): string {
// //     switch (code) {
// //         case 200:
// //             return "Success";
// //         case 400:
// //             return "Bad Request";
// //         case 500:
// //             return "Server Error";
// //         default:
// //             return "Unknown";
// //     }
// // }

// // console.log(handleStatus(200));
// // console.log(handleStatus(400));
// // console.log(handleStatus(500));
// // console.log(handleStatus(301));

// // //================
// // function executeTest(testName: string, callback: Function): void {
// //     console.log(`Starting ${testName}`);
// //     callback();
// // }

// // executeTest("Login Test", () => {
// //     console.log("Test Passed");
// // });

// //=========================================
// function validateUser(user: {username:string;password:string}): boolean
// {
//     if(username>= 3 chars)
// }