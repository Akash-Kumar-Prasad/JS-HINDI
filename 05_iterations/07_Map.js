const myNumbers= [1,2,3,4,5,6,7,8,9,10]
//map also takes callback functions as parameter
//map automatically returns values, filter works as true/false
//suppose we have to add extra 10 in all of the elements in the array

const newNums = myNumbers.map( (num) => num+10 ) 
console.log(newNums);

const nNums = myNumbers//chaining, means multiple methods performed at once
              .map((num)=>num*10)
              .map((num)=>num+1)
              .filter((num)=>num>=40)
//after first method is performed, then all the values are passed to the second and then to this third function for operation perform
console.log(nNums);