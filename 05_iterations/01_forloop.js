//for loop
for (let i = 1; i <= 10; i++) {
  const element = i;
  if (element==5) {
    //console.log("5 found");
  }
  //console.log(element);
  //learn to visualise the code by yourself
}

for(let i =1; i<=10; i++){
  console.log(`outer loop index ${i}`);
  for(let j=1;j<=10;j++){
console.log(`inner loop index ${j} and outer loop value ${i}`);
console.log(i+ " * "+ j + " = " + i*j);
  }
}

let myarray= ["flash", "batman", "superman", "wonderwoman", "the martian"]
console.log(myarray.length);
 for (let k = 0; k < myarray.length; k++) {
  console.log(myarray[k]);
  
 }


 //break and continue

 for (let index = 1; index <= 20; index++) {
 
  if (index==5) {
    console.log(`detected ${index}`);
    break;//breaks and terminates from here after executing the current iteration
  }
  console.log(`value of i is ${index}`);
 }

 for (let index = 1; index <=20; index++){
  if (index==5) {
    console.log(`detected ${index}`);
    continue;//skips or jumps to next iteration abandoning the current iteration
  }
    console.log(`i value is ${index}`);
 }

 //the break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement. it can also be used to jump past a labeled statement when used within that labeled statement
 //when break is encountered the program breaks out of the innermost switch or looping statements and continues executing the next statement after that

 //the continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration
 //in contrast to the break statement, continue does not terminate the execution of the loop entirely