// Use Types
// function add(n1: number, n2: number){
//     let result = n1 + n2
//     console.log(result)
// }

// add(1,2)


//Working with Numbers, Strings & Booleans
// function add(n1: number, n2: number, showResult: boolean, phrase: string){
//     if(showResult){
//         let result = n1+n2
//         console.log(phrase + result)
//     }
// }

// add(1,44, true, "Im hasan")


// Type interence
// let x = "fa"

//Object types
// const person: {
//     name: string
//     age: number
// } = {
//     name: "hasan",
//     age: 29
// }

// console.log(person.name)



// Of course object types can also be created for nested objects.
// Let's say you have this JavaScript object:
// const product = {
//     id: 'abc1',
//     price: 12.99,
//     tags: ['great-offer', 'hot-and-new'],
//     details: {
//       title: 'Red Carpet',
//       description: 'A great carpet - almost brand-new!'
//     }
//   }
// This would be the type of such an object:
// {
//     id: string;
//     price: number;
//     tags: string[];
//     details: {
//       title: string;
//       description: string;
//     }
//   }
// So you have an object type in an object type so to say.

// Array of string

// let hobbies: string[]
// hobbies = ["gym", "jumping"]

// console.log(hobbies)


//Tuple
//tuple is let say if array should hold only number and string, and not 3 value for below max is 2 value holds if you need define more type in role array like  role: [number, string, number]

// const person: {
//     name: string;
//     age: number;
//     role: [number, string]
// } = {
//     name: "Hasan",
//     age: 29,
//     role: [1, "admin"]
// }
// console.log(person.role)

// Union Types
// function add(n1: string | number, n2: string | number){
//     // This below +n1 is equivilent to parseInt(n1) convertion of string to integer
//     console.log(+n1 + +n2)
// }
// add("1","2")

//type aliases or custom types
// Here you can create your own data types
// type combine = number | string

// function add(n1: combine, n2: combine){
//     // This below +n1 is equivilent to parseInt(n1) convertion of string to integer
//     console.log(+n1 + +n2)
// }
// add("1","2")


// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

// For example:

// type User = { name: string; age: number };
// const u1: User = { name: 'Max', age: 30 }; // this works!
// This allows you to avoid unnecessary repetition and manage types centrally.

// For example, you can simplify this code:

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// To:

// type User = { name: string; age: number };
 
// function greet(user: User) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }

// Type aliases and object types
// type user = {name: string, age: number}
// const u1: user = {name: "hasan", age: 29}
// console.log(u1.name)

// This allow you to avoid unnecessary repitation
// type userObj = {Uname: string, age: number}

// function greet(user: userObj){
//     console.log(user.Uname)
// }

// const userObj = {Uname: "hasan ali", age: 29}
// greet(userObj)


// Function return types and void
// function greet(message: string): void{
//     console.log(message)
// }

// console.log("hello hasan")

// Return type

// function add(n1: number, n2: number): number{
//     return n1+n2
// }
// console.log(add(1,2))

// Function as types

// function add(n1: number, n2: number): number{
//     return n1+n2
// }

// let combineValues: (n1: number, n2: number) => number

// combineValues = add
// console.log(combineValues(111,22))

// Never type
// function someError(): never{
//     throw "This is error"
// }

// console.log(someError())

