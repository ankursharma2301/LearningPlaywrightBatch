// //Define interfaces for user data 

// // interface User {
// //     name: String;
// //     id: number;
// //     email: String;
// // }

// // const user1: User =
// // {
// //     name: "Ankur",
// //     id: 23,
// //     email: "abc@gmail.com"
// // }

// // const user2: User =
// // {
// //     name: "John",
// //     id: 25,
// //     email: "xyz@gmail.com"
// // }

// // console.log(user1.name);
// // console.log(user2.email);

// // //Create interfaces with optional properties

// // interface ApiResponse {
// //     id: number;
// //     name: string;
// //     email?: string;
// //     phone?: string;
// // }

// // const response1: ApiResponse =
// // {
// //     id: 201,
// //     name: "Ankur"
// // }

// // const response2: ApiResponse =
// // {
// //     id: 201,
// //     name: "John",
// //     email: "hdjd@gmail.com",
// //     phone: "987654321"
// // }

// //Extend interfaces for inheritance

// interface Personalinfo {
//     name1: string;
//     age: number;
// }

// interface Accountinfo {
//     username: string;
//     password: string;
// }

// interface User extends Personalinfo, Accountinfo {
//     isActive: boolean

// }

// const User1: User =
// {
//     name1: "Maxwell",
//     age: 23,
//     username: "ankursharma2301",
//     password: "Admin@1234",
//     isActive: true

// }

// console.log(User1.password);

// //Implement interfaces in classes

interface LoginService {
    username: string;
    password: string;
    login(): boolean;
}

class AuthService implements LoginService {
    constructor(
        public username: string,
        public password: string
    ) { }

    login(): boolean {
        if (this.username === "Admin" && this.password === "Admin@1234") {
            return true;
        } else {
            return false;
        }
    }
}

const auth = new AuthService("Admin", "Admin@1234")

console.log(auth.login());