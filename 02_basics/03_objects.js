//if you have to master js then learn about objects and events
//objects can be declared by two types namely 
//as literals and as constructors, singleton objects are only created by using constructors only,
//object literals
//Object.create//constructor method used to create an object
const mySym = Symbol("key1")
const jsUser = {
    name: "akash",
    "full name": "akash kumar prasad",
    [mySym]:"myKey1",//square notation is used to have a Symbol value as a key inside an object 
    age:20,
    location:"kolkata",
    email:"akash@gmail.com",
    isLoggedIn :false,
    lastLoginInDays:["Monday", "Saturday"],
}

console.log(jsUser.email);//by default js uses keys as string but you need not specify it, it automatically detects it, if you have made keys just like strings are declared then you need to give them as it is to access them inside brackets, example below"
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);//Symbols are also accessed using by square brackets notations

jsUser.email="akash@chatgpt.com"
//*******Object.freeze(jsUser)*******
jsUser.email="akash@microsoft.com"
//if you dont want to make any changes to the object elements then freeze it
//if any keys value are accessed and changed after freezing then it wont propagate
console.log(jsUser);
//function in js can be treated as a variable also
jsUser.greetings =function(){
    console.log("Hello JS user");
}
jsUser.greetings2= function(){
    console.log(`welcome ${this.name}`);//this keyword is used to refer to the same object
}
console.log(jsUser);
console.log(jsUser.greetings());
console.log(jsUser.greetings2());