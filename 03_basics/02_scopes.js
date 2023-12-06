//any variable declared using the var keyword doesnt obey
//scopes as you can see in the below example
//that is the reason we defer from using var for declaring variables
//let and const follow scopes
//inside { } curly brace is block scope and outside them is the global scope respectively
//there is difference between executing your code in windows ide environment with node and console of any browser for global scope

let a=100
const b =200
var c =300
if (true) {
    let a=10
    const b=20
    var c=30
}

// console.log(a);
// console.log(b);
console.log(c);


function one(){
    const username= "akash"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
//child functions can have access to their parent variables but not vice versa 
//look at the above example for understanding

one()

if (true) {
    const uname= "akash"
    if (uname==="akash") {
        const wsite= "youtube.com"
        console.log(uname + wsite);
    }
    //console.log(wsite);
}
//console.log(uname);

//*********interesting **********
//there are two methods to make a function
//1> making a normal function
//2> making a variable the assigning the function definition to it, because js variable are very powerful
//they can pretty much hold anything into them

//there is only one thing to remember that normal functions can be invoked(called) even before the function is declared and definition is written
//on the other hand, when we make a function expression then it is necessary that we dont call that function before it has been defined otherwise we'd get an error
//this is where the term hoisting comes

function addOne(num1){
    return num1+1
}

const addTwo = function(num2){
    return num2+2
}
addOne(1)
addTwo(2)