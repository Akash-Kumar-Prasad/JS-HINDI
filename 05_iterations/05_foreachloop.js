//forEach loop takes a callback function inside it
//callback functions doesnt have any name
//they are like normal function, they handle parameters

const coding = ["js", "ruby","java","cpp","python"]

coding.forEach(function(val){//val here works as the parameter of the function, which works as the index but gives us the value when console.log(val) is performed
console.log(val);
})

coding.forEach((item)=>{
console.log(item);
})

function printMe(value){
  console.log(value);
}
coding.forEach(printMe)//we are only giving here reference not executing the function here that is why parenthesis are removed

coding.forEach((item, index, arr)=>{
  console.log(item, index, arr);
})
//forEach not only has access to the value but also has its index and the whole array with it


//whenever data comes from database it comes in array format and every value is in object format


const myCoding= [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "java",
    languageFileName:"java"
  },
  {
    languageName:"python",
    languageFileName:"py"
  }
]

myCoding.forEach( (item)=>{
  console.log(item.languageName);
})