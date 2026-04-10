// // // // // class BasePage {
// // // // //     open() {
// // // // //         console.log("Opening base page")
// // // // //     }
// // // // // }

// // // // // class LoginPage extends BasePage {
// // // // //     open() {
// // // // //         super.open();
// // // // //         console.log("Login Page Loaded")
// // // // //     }
// // // // // }

// // // // // let result = new LoginPage();

// // // // // result.open();

// // // // class TestBase {
// // // //     setup() {
// // // //         console.log("Setup Browser and environment");
// // // //     }
// // // // }

// // // // class LoginTest extends TestBase {
// // // //     setup() {
// // // //         super.setup();
// // // //         console.log("Navigate to Login Page");

// // // //     }

// // // // }

// // // // let test = new LoginTest();
// // // // test.setup();

// // // //Scenario: Automation Framework Layers
// // // class BaseTest {
// // //     start() {
// // //         console.log("Start Test");
// // //     }
// // // }

// // // class LoginTest extends BaseTest {
// // //     start() {
// // //         super.start();
// // //         console.log("Login Test started");
// // //     }
// // // }

// // // class DashboardTest extends LoginTest {
// // //     start() {
// // //         super.start()
// // //         console.log("Dashboard Test Started");
// // //     }
// // // }

// // // new DashboardTest().start();

// // class BasePage {
// //     open(url) {
// //         console.log(`Opening ${url}`);
// //     }
// // }

// // class LoginPage extends BasePage {
// //     open() {
// //         super.open("https://test.com/login")
// //         console.log("Login Page Loaded")
// //     }
// // }

// // class DashboardPage extends LoginPage {
// //     open() {
// //         super.open();
// //         console.log("Dashboard Loaded");
// //     }
// // }

// // new DashboardPage().open();
// // //-----------------------------------------------------------

// // class A {
// //     show() {
// //         console.log("A");
// //     }
// // }

// // class B extends A {
// //     show() {
// //         console.log("B");
// //     }
// // }

// // class C extends B {
// //     show() {
// //         super.show();
// //         console.log("C");
// //     }
// // }

// // new C().show();

// //-----------------------------------------//

// class BasePage {
//     open() {
//         console.log("Opening the page");
//     }
// }

// class LoginPage extends BasePage {
//     open() {
//         super.open()
//         console.log("Login Page Loaded")
//     }
// }

// class HomePage extends LoginPage {
//     open() {
//         super.open();
//         console.log("Home Page Loaded")
//     }
// }

// new HomePage().open();

//---------------
class BasePage {
    open() {
        console.log("Base");
    }
}

class LoginPage extends BasePage {
    open() {
        super.open();
        console.log("Login");
    }
}

class DashboardPage extends LoginPage {
    open() {
        console.log("Dashboard");
    }
}

new DashboardPage().open();
class LoginPage extends BasePage {
    async open() {
        super.open("https://test.com");
    }
}