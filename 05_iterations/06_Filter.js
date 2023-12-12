// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item)=>{
//   console.log(item);
// })//forEach doesnt return any values

const myNums = [1,2,3,4,5,6,7,8,9,10]
//filter also takes callback functions as parameters, where each and every value would be accessed and if the condition is satisfied or is true then will desired values will be returned

//single line arrow functions dont need to have a return keyword
const newNum = myNums.filter((num)=> { return num>4})//if scope is given then return keyword is mandatory, remember this
console.log(newNum);

const newNums = []

myNums.forEach( (num) => {
  if(num>4){
    newNums.push(num)
  }
} )

console.log(newNums);

const books = [
  { title:"Book One", genre: "Fiction", publish: "1981", edition: 2004},
  { title:"Book Two", genre: "Non-Fiction", publish: "1992", edition: 2008},
  { title:"Book Three", genre: "History", publish: "1992", edition: 2007},
  { title:"Book Four", genre:"Non-Fiction", publish: "1989", edition: 2010},
  { title:"Book Five", genre: "Science", publish: "2009", edition: 2014},
  { title:"Book Six", genre: "Fiction", publish: "1987", edition: 2010},
  { title:"Book Seven", genre: "History", publish: "1986", edition: 1996},
  { title:"Book Eight", genre: "Science", publish: "2011", edition: 2016},
  { title:"Book Nine", genre: "History", publish: "1981", edition: 1989},
  { title:"Book Ten", genre: "Fiction", publish: "1980", edition: 2010}
];

const userBooks = books.filter( (bk)=> bk.genre==="History")
//no return keyword is used as implicit return arrow function is defined
console.log(userBooks);

const userBooksPublish = books.filter( (bk) => {
  return bk.publish>=1985 && bk.genre==="Science"} )
//return keyword is used because we've opened a scope here in arrow function
console.log(userBooksPublish);