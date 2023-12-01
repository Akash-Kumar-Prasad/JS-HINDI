// Primitive
//call by value(changes are made to the copied item)
// 7 types
//String, Number, Boolean, null, undefined, Symbol, bigInt


const score = 100
const scoreValue= 100.25

const isLoggedIn= false
const outsideTemp = null
let userEmail;

const id= Symbol('123')
const anotherId= Symbol('123')

console.log(id===anotherId);

const bigNumber= 32165498798765465432321n;


//Non-Primitive
//call by reference(changes are made to the actual value)
//Arrays , Objects, Functions

const heroes= ["shaktimaan", "nagaraj", "doga"]

let myObj = {
    name : "akash",
    age: 27
}

const myFunction = function (){
console.log("Hllo Eorld");
}


console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction);



//**********************************


let myYoutubeName = "Akashprasad"

let anotherName = myYoutubeName
anotherName= "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email= "akash@rediffmail.com"
userTwo.upi= "two@axis"

console.log(userOne);
console.log(userTwo);