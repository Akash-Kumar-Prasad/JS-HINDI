/**WHILE LOOP */
//initialization and termination is mandatory
//if no terminating statement is given then the loop will run infinitely
let index=0
while (index<=10) {
  console.log(`value of index is ${index}`);
  index+=2
}

let myarray= ["flash", "batman", "superman", "martian"]
let arr=0;
while(arr<myarray.length){
  console.log(`value is ${myarray[arr]}`);
  arr++
}

/**DO WHILE LOOP */
//condition will be checked at last and the loop will execute at least once before it finds the condition is false
let score = 11
do {
  console.log(`score is ${score}`);
  score++
} while (score<=10);

