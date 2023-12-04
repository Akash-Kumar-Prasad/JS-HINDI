const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman" , "flash" , "batman"]
//array of strings declared and initialized
//arrays take any type of entry data be it boolean, objects as well as arrays
//marvel_heroes.push(dc_heroes)
//pushed second array into first array
//the first array took the second array whole as an element i.e, 3rd element
//it means it works(pushes) alone on the existing array given at the destination side
//console.log(marvel_heroes);
// here output comes as 
//['thor','ironman','spiderman', ['superman','flash','batman']]
//console.log(marvel_heroes[3][1]);
//if you want to access a specific value of the third element(array) which has elements inside of it then you have to use brackets twice like marvel_heroes[][]
const allHeroes = marvel_heroes.concat(dc_heroes);
//same output is seen in both the cases in concat() and push() operations but the major difference here in the output of the final result is that both of the arrays are merged properly as one single array into a new one, concat() return a new array
console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
//here three dots (...) represent spread operator which works just like concat() but all the elements are indivial in the new array
//we can merge various types of arrays by using this operator
console.log(all_new_heroes);

const anotherArray = [1,2,3,[4,5,6], 7, [6, 7, [4, 5]] ]
const realAnotherArray= anotherArray.flat(Infinity)
console.log(realAnotherArray);
//if you have multiple arrays inside of an array, you can have all of them in a sigle array with each having their own index in normal ascending order by using the flat() method, and you also need to give an argument in the flat() method to make it a single array by counting how many arrays are there in the actual array which is known as depth, there is also a shortcut to it, prefer not to use it which is "Infinity" so that you dont have to calculate the depth

console.log(Array.isArray("Akash"));//return boolean value by checking the given parameter is array or not
console.log(Array.from("Kumar"))//converts an string to array with each letters separated
console.log(Array.from({name:"prasad"}));//intersting case here object cannot be directly converted to individual elements, that is why you have to make an array using keys or the values of the array of an object
//if the objects are not converted to array elements then it will return an empty array

let score1 =100
let score2= 200
let score3 =300

console.log(Array.of(score1, score2, score3));
//returns a new array from a set of elements

//learn more about is(), from(), of()