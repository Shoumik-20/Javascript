// // log a statement using console.log()
// console.log('Hello from main.js')

// // Variables

// let age = 25
// console.log(age)

// // All const variables must be initialized and once initialized it cannot be reassigned new value
// const salary = 80000
// console.log(salary)

// let sum = 0
// sum = 5
// console.log(sum)

//// Data Type

// // String
// const name = "Shoumik";
// const language = "Javascript";

// // Number
// const total = 0;
// const PI = 3.14;

// // Boolean
// const isPrimaryNumber = true;
// const isNewUser = false;

// // Undefined
// let result;
// // console.log(result);
// const res = undefined;

// // If you want to assign a value not known use null
// const data = null;

// // Object

// // Object literal
// const person = {
//   firstName: "Bruce",
//   lastName: "Wayne",
//   age: 30,
// };

// console.log(person.firstName)

// // Array
// const oddNumbers = [1,3,5,7,9]

// console.log(oddNumbers[2])

// Dynamically typed language

// let a = 10
// a = 'Vishwas'
// a = true
// console.log(a)

// const isValid = false
// console.log(!isValid)

// Type conversion -> implicit conversion and explicit conversion

// console.log(2+'3')
// console.log(true+'3')
// console.log('4' + '2')
// console.log('Bruce' - 'Wayne')
// console.log('5' - true)
// console.log(5 + undefined)

// console.log(Number('5'))
// console.log(parseInt('5'))
// console.log(String(5))
// console.log((500).toString())
// console.log(Boolean(10))

// Equality

// const var1 = 10
// const var2 = '10'

// console.log(var1 == var2)
// console.log(var1 === var2)

// Conditional Statements
// const num = 0

// if(num > 0) {
//     console.log('Number is positive')
// } else if (num < 0){
//     console.log('Number is not positive')
// }
// else{
//     console.log('Number is zero')
// }

// const color = 'red'

// switch(color){
//     case 'red':
//         console.log('Color is red')
//         break
//     case 'blue':
//         console.log('Color is blue')
//         break
//     case 'green':
//         console.log('Color is green')
//         break
//     default:
//         console.log('Not a color')
// }

// Looping

// for (let i = 1; i <= 5; i ++){
//     console.log('Iteration number' + i)
// }

// let i = 1
// while(i <=5){
//     console.log('Iteration while' + i)
//     i++
// }

// let i = 6
// do {
//     console.log('Iteration while ' + i)
//     i++
// } while(i <=5)

// const numArray = [1,2,3,4,5]

// for (const num of numArray) {
//     console.log('Iteration number ' + num)
// }

// Functions
// function greet(userName) {                  // Parameters
//     console.log('Good Morning ' + userName)
// }

// greet('Bruce') // Argument 
// greet('Clark')

// function add(a,b) {
//     return a+b
// }

// const arrowSum = (a,b) => a+b

// const addFive = (num) => num+5

// const sum = arrowSum(5,10)
// console.log(sum)

// Scope 

// Global Scope
const myNum = 100

// Block scope
if(true){
    const myName = 'Vishwas'
    console.log(myName)
    console.log(myNum)
}

// Function Scope
function testFn(){
    const myName = 'Batman'
    console.log(myName)
    console.log(myNum)
}

testFn()
