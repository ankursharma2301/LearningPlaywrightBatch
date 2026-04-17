// // // // // // function identity<T>(value: T): T {
// // // // // //     return value;
// // // // // // }

// // // // // // console.log(identity(2));
// // // // // // console.log(identity("Ankur"));

// // // // // function getFirst<T>(arr: T[]): T {
// // // // //     return arr[0]!;

// // // // // }

// // // // // console.log(getFirst([2, 3, 56]));
// // // // // console.log(getFirst(["Ankur", "xyz"]));

// // // // function getTwovalues<T, V>(val1: T, val2: V) {
// // // //     return [val1, val2];
// // // // }

// // // // console.log(getTwovalues(5, 6));
// // // // console.log(getTwovalues("sfsg", "hdhdfjf"));

// // // // Q4: API Response Wrapper (VERY IMPORTANT for QA)

// // // interface APIResponse<T> {
// // //     status: number;
// // //     data: T;
// // // }

// // // type User = {
// // //     name: string;
// // // };

// // // type Product = {
// // //     productName: string;
// // // };

// // // const userResponse: APIResponse<User> = {
// // //     status: 200,
// // //     data: { name: "Ankur" }
// // // };

// // // const productResponse: APIResponse<Product> = {
// // //     status: 200,
// // //     data: { productName: "Laptop" }
// // // };

// // // console.log(userResponse);
// // // console.log(productResponse);

// // 👉 Q5: Generic Test Data

// interface TestData<T> {
//     input: T;
//     expected: T;
// }

// const stringTest: TestData<string> =
// {
//     input: "hello",
//     expected: "HELLO"
// }
// console.log(stringTest.input.toUpperCase() === stringTest.expected);

// const numberTest: TestData<number> =
// {
//     input: 5,
//     expected: 25
// }

// console.log(numberTest.input * numberTest.input === numberTest.expected);

class Storage<T> {
    private data: T[] = [];

    add(item: T): void {
        this.data.push(item);

    }

    getAll(): T[] {
        return this.data;
    }
}

let stringStorage = new Storage<string>();
stringStorage.add("Ankur");
console.log(stringStorage.getAll());

let numberStorage = new Storage<number>();
numberStorage.add(23);

console.log(numberStorage.getAll());
