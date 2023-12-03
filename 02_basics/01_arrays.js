//javascript arrays are objects and are also resizable can store multiple items of different datatypes within or same datatype under a single variable name
//javascript arrays operations like "copy" are of two types
//1> shallow copy of an object is a copy whose properties share the same reference (point to the same underlying values) as those of the source object from which the copy was made. as a result when you change either the source or the copy, you may also cause the other object to change too
//2> deep copy of an object is a copy whose properties do not share the same reference (point to the same underlying values) as those of the source object from which the copy was made. as a result when you change either the source or the copy, you can be assured youre not causing the other object to change too.


const myArr = [0,1,2,3,4,5]//number array declaration and initialization
const myHeroes = ["shaktimaan", "naagraaj", "doga"]//string array declaration and initialization

const myArr2 = new Array(1,2,3,4)//by using new method which will give us prototypes
console.log(myArr[1])//here index 1 is put as arfument in the variable to seek the the element contained in it
//array index starts from 0

//array methods

myArr.push(6);//adds an element at the end to the array
myArr.push(8)//adds another element at the end
console.log(myArr);//seeing output
myArr.pop()//removes the last element from the array, it doesnt require any arguments
console.log(myArr);

myArr.unshift(9)//adds an element at the start of the array and it moves all the elements to its right changing their indexes

myArr.shift()//no arguments are required here and it removes the first element from the array and shifts all to the left side changing their indexes accordingly
myArr.shift()
console.log(myArr);

console.log(myArr.includes(3));
console.log(myArr.indexOf(9));

const newArr= myArr.join()//after joining an array it gives string as output
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice and splice

const arr= [1,2,3,4,5,6,7,8,9]
console.log("original " , arr);//actual array printed

const slicearr = arr.slice(0,3);//slice return a portion of an array specified where arguments are given as (startIndex, endIndex), here the endIndex element is not included in the portion desired
console.log("slice ", slicearr);

const splicearr = arr.splice(0,4)//splice removes the elements from the array, if necessary inserts new elements in their place, returning the deleted elements as the said array, the arguments are given as (startIndex, noOfElementToDelete), startIndex means from where to start removing elements and noOfElementToDelete refers to how many elements you want to remove
console.log("splice ",splicearr);

console.log(arr);