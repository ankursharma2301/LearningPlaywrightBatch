// // // // // // Create class TestConfig

// // // // // // static variable: baseUrl = "https://test.com"
// // // // // // static method: getBaseUrl()

// // // // // class TestConfig {
// // // // //     static baseUrl = "https://test.com";

// // // // //     static getBaseUrl() {
// // // // //         return TestConfig.baseUrl;
// // // // //     }
// // // // // }

// // // // // console.log(TestConfig.getBaseUrl());

// // // // Create class MathUtils

// // // // static method: add(a, b)
// // // // static method: multiply(a, b)

// // // class MathUtils {

// // //     static add(a, b) {
// // //         return a + b;
// // //     }

// // //     static multiply(a, b) {
// // //         return a * b;
// // //     }

// // // }

// // // console.log(MathUtils.add(2, 3));
// // // console.log(MathUtils.multiply(5, 6));

// // // 1. Config Class

// // // 👉 Create class Config

// // // static variable: env = "QA"
// // // static method: getEnv()

// // class Config {
// //     static env = "QA";

// //     static getEnv() {
// //         return Config.env;
// //     }
// // }
// // console.log(Config.getEnv());
// Create class Counter

// static variable: count = 0
// static method: increment()
// static method: getCount()

class Counter {
    static count = 0;

    static increment() {
        this.count++;
    }
    static getCount() {
        return this.count;
    }
}
Counter.increment();
Counter.increment();

console.log(Counter.getCount());