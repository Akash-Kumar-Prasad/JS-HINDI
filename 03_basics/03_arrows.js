const user= {
    username: "akash",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);//this keyword is used to refer to the current context, i.e, current scope
        console.log(this);//here this refers to the current object, where it has been used, we can see that using the console.log(this)
    }
    //context means, the values inside the scope
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this);
//above we have used console.log(this) which gives an output which is a empty object {} because global doesnt have any context as this is done in the node environment,
//whereas in browsers console "this" give the global object that is Window object, so that we can (capture)utilize all the Window events

function chaii(){
    console.log(this);
}
chaii()
//when using only this inside a function provides various values, to be used by user, 

function chai(){
    const uname="kumar"
    console.log(this.uname);
}
chai()
//but then if this refereced to a variable then it doesnt work and gives us undefined
/* you need to remember that this works only on objects with context not in functions */

const newChai = () => {
let usname = "prasad"
console.log(this);
}
/*we can see here also that the output from the arrow function also produce the same output as the normal function when this is used with or without referencing the context */
newChai()

//** pure arror function */

const adds = (n1, n2) => {
return n1+n2
}//normal arrow function, curly braces require return statement inside functions mandatorily which means it is explicit return function
console.log(adds(5,6));

const adding = (num0, num1)=> num0+num1
//implicit return arrow function, its used for one line statements, we can use braces there also like below, as it removes the use of return statements, it is very much used in react.js
//const adding = (num0, num1)=> (num0+num1)

const added = (number1, number2) => ({username:"akp"})
//above an object is returned, objects needs to be wrapped inside braces for it to be returned by any implicit function
