// class User {
//     public username: string
//     private password: string

//     constructor(username: string, password: string) {
//         this.username = username;
//         this.password = password;
//     }

//     login(): string {
//         if (this.password === "1234") {
//             return "Login Success"
//         } else {
//             return "Login Failed"
//         }
//     }
//     getMaskedPassword(): string {
//         return "*".repeat(this.password.length)

//     }
// }

// let response = new User("Ankur", "1234");

// console.log(response.login());

// console.log(response.getMaskedPassword());

class BasePage {
    protected url: string;

    constructor(url: string) {
        this.url = url;
    }
}

class LoginPage extends BasePage {
    openPage(): string {
        return `Opening ${this.url}`

    }
}

let openUrl = new LoginPage("https://google.com/login");

console.log(openUrl.openPage());
