const userEmail ="akash@gmail.com"
if (userEmail) {
  console.log("Got email");
}else{
  console.log("Dont have email");
}

//*********FALSY VALUES */
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//** TRUTHY VALUES*/
//true, "0", 'false', " ", [], {}, function(){}, 
//a thing to notice here is that
//if any value is given to any variable
//then it is deemed as truthy value, it checks implicitly
//if no value is given there in the variable
//then it can be said as falsy value
//many a times youll get to see that if a empty string is given it provides a falsy output
// but if we give an empty array it gives a truthy value

if (userEmail.length===0)//check the array if it is empty or not
{
 console.log("array is empty"); 
}

const emptyObject ={}//check if object is empty
if (Object.keys(emptyObject).length === 0) {
  console.log("ibject is empty");
}

/* remember these
false == 0 gives true
fasle == '' gives true
0 =='' gives true
*/

//Nullish Coalescing Operator (??): null undefined
//it is used for safety purposes and it assigns values to a variable which it gets from other methods, it is used to check that the values are coming or not at the said field

let val1;
val1 = 5 ?? 10
console.log(val1);
//it assigns the the value which it gets at first

// val1= null ?? 20
// val1= undeined ?? 32
// val1 =null ?? 43 ?? 23
 
//ternary operator in js is different from null coalescing operator, mind it
//ternary operator is the another syntax for if else

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
