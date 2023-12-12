//for of loop
// [" "," "," "]
// [{},{},{}]

const arr1 = [1,2,3,4,5]
for (const ina of arr1) {
  console.log(ina);
}//no need to specify start or end index it automatically does that
//here a number array is taken and its value of loop starts from in the variable "ina" for which arr1 will be printed

const arr = ["1,2,3,4,5", "superman"]//mixed array
for (const num of arr[1]) {//"num" is the starting index and upon which we shall use it that is arr[1] 
  console.log(num);//second element of aaray is shown
}

const startMessage = "Hello World!"
for (const j of startMessage) {
  console.log(`each char is ${j}`);
}

//MAPS

//maps are like arrays, they are unique in nature, its an object in itself
//map object holds key-value pairs and remembers the original insertion order of the keys.
//map objects are collections of key-value pairs
//a key in the map may only occur once, its unique in the maps collection, that is no duplicate value
//any value (both objects and primitive values) may be used as either a key or a value

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('JP', 'Japan')
map.set('FR', 'France')

console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-" ,value);
}

const myObject = {
  game1 : "NFS",
  game2 : "GTA"
}

for (const [key, value] of myObject) {
  console.log(key, ":-", value);
}
