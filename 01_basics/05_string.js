
const name = "Akash"
const repoCount =10

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation is used, variables are directly injected using backtick ``, inside it any method can also be used

const gameName = new String ("Akash-k-p");
// here a new keyword is used to create an object if String class and inside its constructor pass the value of the string with quotes enclosed, dont get confused with its representaion as an array, an object is there with key-value pairs, length property is given and many other methods
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 5)
console.log(newString);
const anString = gameName.slice(-8,2);//negative number is allowed
console.log(anString);

const newStringOne= "    akash    "
console.log(newStringOne);
console.log(newStringOne.trim);//trim removes spaces on both sides as well as line terminators, trimStart, trimEnd

const url = "https://akash%20prasad.com"
console.log(url.replace("%20", "-"));

console.log(url.includes('akash'));

console.log(url.includes("---"));

console.log(gameName.split("-"));
