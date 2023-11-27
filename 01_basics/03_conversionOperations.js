let score=undefined;
//console.log(score);
//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score);
//console.log(typeof valueInNumber)
//console.log(valueInNumber);
//"33" => 33
//"33abc" => NaN
//true=> 1; false=> 0
//null => 0
//undefined is treated as undefined

let isLoggedIn1 = 1
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1);

let isLoggedIn0 = 0
let booleanIsLoggedIn0 = Boolean(isLoggedIn0);
console.log(booleanIsLoggedIn0);

let isLoggedInEmptyString = ""
let booleanIsLoggedInEmptyString = Boolean(isLoggedInEmptyString);
console.log(booleanIsLoggedInEmptyString);

let isLoggedInString = "akash"
let booleanIsLoggedInString = Boolean(isLoggedInString);
console.log(booleanIsLoggedInString);

//1 => true
//0 => false
//"" =>false
//"akash"=> true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);