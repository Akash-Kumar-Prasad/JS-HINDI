//if you have to master js then learn about objects and events
//objects can be declared by two types namely 
//as literals and as constructors, singleton objects are only created by using constructors only,
//object literals
//Object.create//constructor method used to create an object
const jsUser = {
    name: "akash",
    age:20,
    location:"kolkata",
    email:"akash@gmail.com",
    isLoggedIn :false,
    lastLoginInDays:["Monday", "Saturday"]
}

console.log(jsUser.email);//by default js uses keys as string but you need not specify it, it automatically detects it, on the other hand if you have made keys just like strings are declared then you need to give them as it is to accec them example in second console output
console.log(jsUser[email]);