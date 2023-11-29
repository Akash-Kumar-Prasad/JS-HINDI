// console.log(2>1);//true
// console.log(2>=1);//true
// console.log(2<1);//false
// console.log(2<=1);//false
// console.log(2!=2);//false
// console.log(2==2);//true

/* it is very much necessary to compare similar datatypes otherwise predictable results cannot be obtained*/

// console.log("2">1);
// console.log("02">1);

// console.log(null>0);//false
// console.log(null<0);//false
// console.log(null==0);//false
// console.log(null>=0);//true
// console.log(null<=0);//true
// console.log(null==null);//true
// console.log(null!=null);//false
/* the reason is that an equality check == and comparison > < >= <= work differently.
comparisons convert null to a number, treating it as 0.
that is why null >=0 or null <= 0 is true and null>0, null<0 is false
*/
console.log(undefined >0);//false
console.log(undefined <0);//false
console.log(undefined>=0);//false
console.log(undefined<=0);//false
console.log(undefined==0);//false
console.log(undefined!=0);//true
//most of the time we neeed to avoid such types of conversions and must strive to write clean and readable code