// if statement, works as you want it to
// if(true){
// //internal code will run
// }
// if (false) {
//   //will not run,
// }
// <, > , <=, >=, ==, !=, ===(strict check, checks type of data also), !==(anti pattern)
const isUserLoggedIn=true
if(isUserLoggedIn==true)
{
  console.log("executed");
}

 let temperature = 41
 if(temperature < 50){
  console.log("less than 50");
 }else{
  console.log("temperature is greater than 50");
 }

 console.log("Execute");

 const score = 200
 if(score >100)
 {
  const power= "fly"
  console.log(`user power ${power}`);
 }
 //var is not used because it can be accessed outisde of its scope also

 //short hand notation

 const balance = 1000
 if (balance > 500) console.log("test");//implicit scope, we can write multiple lines of code by giving comma, but unlikely that anyone will ever appericiate your code
 //if(balance >500) console.log("test"), console.log("test2");

 if(balance<500){
  console.log("less than 500");
 }else if(balance<750){
  console.log("less than 750");
 }else if(balance < 900){
  console.log("less than 900");
 }else{
  console.log("less than 1200");
 }

 const userLoggin =true
 const debitCard=true
 const loggedInFromGoogle= false
 const loggedInFromEmail=true

 if(userLoggin && debitCard){
  console.log("allow to buy courses");
 }
 if (loggedInFromGoogle || loggedInFromEmail ) {
  console.log("user logged in");
 }