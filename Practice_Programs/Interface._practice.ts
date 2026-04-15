// // ✅ Question 1: Signup Page

// interface BasePage {
//     url: string;
//     title: string;
// }

// interface SignupPage extends BasePage {
//     usernameSelector: string;
//     emailSelector: string;
//     passwordSelector: string;
//     signupButtonSelector: string
// }

// const signupPage: SignupPage =
// {
//     url: "/signup",
//     title: "SignUp",
//     usernameSelector: "#username",
//     emailSelector: "#email",
//     passwordSelector: "#password",
//     signupButtonSelector: "#signupButton"

// }

// console.log(`Url is: ${signupPage.url}`);
// console.log(`Title is: ${signupPage.title}`);

// //Question 2: Dashboard Page
// interface Dashboard extends BasePage {
//     profileIcon?: string;
//     logoutbutton: string;
// }

// let dashboard: Dashboard =
// {
//     url: "/dashboard",
//     title: "Dashboard",
//     logoutbutton: "Logout"
// }

// console.log(dashboard.url);
// console.log(dashboard.title);
// console.log(dashboard.logoutbutton);

interface ApiBase {
    status: number;
    message: string;
}

interface LoginApiResponse extends ApiBase {
    token?: string;
    error?: string;
}

let successresponse: LoginApiResponse =
{
    status: 200,
    message: "Success",
    token: "abc123xyz"

}

let failureresponse: LoginApiResponse =

{
    status: 404,
    message: "Failed",
    error: "Invalid credentials"
}

function handleLoginResponse(response: LoginApiResponse) {
    if (response.token) {
        console.log("Login Success");
    } else if (response.error) {
        console.log("Login Failed");
    } else {
        console.log("Unknown Response");
    }
}

handleLoginResponse(successresponse); // Login Success
handleLoginResponse(failureresponse); // Login Failed
