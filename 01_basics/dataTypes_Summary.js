//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
// const anotherId = symbol('123')

const bigNumber = 12345678n
console.log(bigNumber);

// Reference  (Non Primitive)
// Array, objects, functions 

const heros = ["shaktiman", "naagraj", "doga"];
 let myObj ={
    name: "doga",
    age: 21
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);