function sayMyName(){
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
}
sayMyName()

function addTwoNumbers(number1, number2){
    let added= number1+number2;
    return added;
}
const final =addTwoNumbers(2,4)

const second = function(num1, num2){
    return num1+num2;
}

console.log(final);
console.log(second(2,8));

function loginUserMessage(username="sam"){//if you dont want to enter in the if block then give atleast some value to the parameter of the function(username="sam"), or if the function is called and arguments are given then it will override the previous value
    if(!username){//!username is equivalent to "username===undefined"
        console.log("Please enter a name");
        return
    }
    else
    return `${username} just logged in`
}
console.log(loginUserMessage());
//if any arguments are not passed through the function then it would give undefined

function calculateCartPrice(...num1){
    //(val1, val2, ...num1) > here multiple parameters are given then a rest operator,
    //which means when arguments are given in the order of
    //(200,500,500,499,698,753) > here first two values will be assigned to the first two variables after that all of them will be returned as arrays like [5000, 850]
    //... means rest operator, which is same as spread operator, they are same,
    //it depends on their use cases, how they are implemented,
    //there is a problem in ecomerce site where user just puts items in the cart so we dont have any idea
    //how many items are going to come then it is necessary to use the rest operator to add all the prices of the item in total,
    //an array is returned
    return num1
}
console.log(calculateCartPrice(200, 400, 5000, 850))

const user={
    uname: "akash",
    price:399
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.uname} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({
    uname:"sam",
    price:999
})

const mynewarr= [200,400,600,800,900]

function return2ndValuefromArray(getArray){
    return getArray[1]
}

console.log(return2ndValuefromArray(mynewarr));

console.log(return2ndValuefromArray([200,900,700,582]));