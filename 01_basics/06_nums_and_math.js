const score= 400
//console.log(score);//normal declaration and initialization of a variable

const balance = new Number (100)//Number constructor is used to create a number
//console.log(balance);

//console.log(balance.toString().length);//number changed to string and then length method is used
//console.log(balance.toFixed(2));//it will give 2 values after decimal, you can change it also, used in ecommerce site specially

const otherNumber = 23.8966
//console.log(otherNumber.toPrecision(2));//it gives 2 values after decimal and rounds it off, carefully use toPrecision() as it return a string output

const otherNum= 1234.5468
//console.log(otherNum.toPrecision(3));//it will take the first 4 digits and round it off, use precisely otherwise it converts it to exponential number system

const hundreds= 1000000
//console.log(hundreds.toLocaleString());
//generally it gives output as US standard reading with empty parameters to toLocaleString by inserting comma in between them

//console.log(hundreds.toLocaleString('en-IN'));
//here inside the parameters of toLocaleString "en-IN" is given to produce the numbers in Indian format for native people

//+++++++++++++MATHS+++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));//abs means absolute value, this changes the negative value to positive and not vice versa, i.e, -4 to 4 only

console.log(Math.round(4.6));//it rounds off the value to its nearest whole number

console.log(Math.ceil(4.2));//as the name suggests it converts the value to it upper limit


console.log(Math.floor(8.6));// you can see the lowest value is given by using the floor method and eliminating the decimal part

console.log(Math.sqrt(25));

console.log(Math.pow(2,4));

console.log(Math.min(4, 3, 1 , 7, 0));

console.log(Math.max(23, 43, 54, 13 , 98, 78));

console.log(Math.random());//interestingly random() is a static method which gives float values between or equal to 0 and less than 1 always

console.log((Math.random()*10) +1);//it necessary to keep in mind that random() gives values between or equal to 0 and less than 1 so we need to multiply it by any desired number then increment it by 1, therefore it gives the float number then using floor() method it will be providing a whole number or integer

console.log(Math.floor(Math.random()*10) +1);


const min=10
const max=20
 
console.log(Math.floor(Math.random() * (max - min + 1)) + min);