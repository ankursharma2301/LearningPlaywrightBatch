// // // // // // // // // // // Create class TestConfig

// // // // // // // // // // // static variable: baseUrl = "https://test.com"
// // // // // // // // // // // static method: getBaseUrl()

// // // // // // // // // // class TestConfig {
// // // // // // // // // //     static baseUrl = "https://test.com";

// // // // // // // // // //     static getBaseUrl() {
// // // // // // // // // //         return TestConfig.baseUrl;
// // // // // // // // // //     }
// // // // // // // // // // }

// // // // // // // // // // console.log(TestConfig.getBaseUrl());

// // // // // // // // // Create class MathUtils

// // // // // // // // // static method: add(a, b)
// // // // // // // // // static method: multiply(a, b)

// // // // // // // // class MathUtils {

// // // // // // // //     static add(a, b) {
// // // // // // // //         return a + b;
// // // // // // // //     }

// // // // // // // //     static multiply(a, b) {
// // // // // // // //         return a * b;
// // // // // // // //     }

// // // // // // // // }

// // // // // // // // console.log(MathUtils.add(2, 3));
// // // // // // // // console.log(MathUtils.multiply(5, 6));

// // // // // // // // 1. Config Class

// // // // // // // // 👉 Create class Config

// // // // // // // // static variable: env = "QA"
// // // // // // // // static method: getEnv()

// // // // // // // class Config {
// // // // // // //     static env = "QA";

// // // // // // //     static getEnv() {
// // // // // // //         return Config.env;
// // // // // // //     }
// // // // // // // }
// // // // // // // console.log(Config.getEnv());
// // // // // // Create class Counter

// // // // // // static variable: count = 0
// // // // // // static method: increment()
// // // // // // static method: getCount()

// // // // // class Counter {
// // // // //     static count = 0;

// // // // //     static increment() {
// // // // //         this.count++;
// // // // //     }
// // // // //     static getCount() {
// // // // //         return this.count;
// // // // //     }
// // // // // }
// // // // // Counter.increment();
// // // // // Counter.increment();

// // // // // console.log(Counter.getCount());

// // // // // 4. Logger Class (VERY COMMON)

// // // // // 👉 Create class Logger

// // // // // static method: log(message)
// // // // // static method: error(message)

// // // // // 👉 Output:

// // // // // LOG: Test started
// // // // // ERROR: Login failed

// // // // class Logger {
// // // //     static log(message) {
// // // //         console.log(`LOG:${message}`);
// // // //     }

// // // //     static error(message) {
// // // //         console.log(`ERROR:${message}`)
// // // //     }
// // // // }
// // // // Logger.log("Test Started");
// // // // Logger.error("Login Failed")

// // // // 5. Environment Config

// // // // 👉 Create class EnvConfig

// // // // static variable: baseUrl = "https://qa.com"
// // // // static variable: timeout = 5000
// // // // static method: getConfig()

// // // class EnvConfig {
// // //     static baseUrl = "https://qa.com";
// // //     static timeout = 5000;

// // //     static getConfig() {
// // //         return {
// // //             baseUrl: this.baseUrl,
// // //             timeout: this.timeout
// // //         };
// // //     }
// // // }

// // // console.log(EnvConfig.getConfig());
// // // 8. URL Builder

// // // 👉 Create class UrlBuilder

// // // static variable: baseUrl
// // // static method: getLoginUrl()
// // // static method: getDashboardUrl()

// // class UrlBuilder {
// //     static baseUrl = "https://qa.com";

// //     static getLoginUrl() {
// //         return `${this.baseUrl}/login`;
// //     }

// //     static getDashboardUrl() {
// //         return `${this.baseUrl}/dashboard`;
// //     }
// // }
// // console.log(UrlBuilder.getDashboardUrl());
// // console.log(UrlBuilder.getLoginUrl());

// // 7. Test Data Factory

// // 👉 Create class TestData

// // static method: getUser()

// // 👉 Output:

// // { username: "testUser", password: "1234" }


// class TestData {
//     static username = "testUser";
//     static password = "1234";

//     static getUser() {
//         return {
//             username: this.username,
//             password: this.password
//         };
//     }
// }

// // Usage
// const user = TestData.getUser();
// console.log(user);

// 15. Framework Level (🔥 BEST ONE)

// 👉 Create class FrameworkConfig

// static variables:
// baseUrl
// browser
// timeout
// static method:
// printConfig()
class FrameworkConfig {

    static baseUrl = "https://qa.com";
    static browser = "chromium";
    static timeout = 5000;

    static printConfig() {
        console.log(`Base URL: ${this.baseUrl}`);
        console.log(`Browser: ${this.browser}`);
        console.log(`Timeout: ${this.timeout}`);
    }
}

// Usage
FrameworkConfig.printConfig();