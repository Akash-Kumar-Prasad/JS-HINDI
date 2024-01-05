function multiplyBy5 (num){
  return num*5
}
multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);//by default 

function createUser(username, score){
  this.username = username
  this.score = score
}

createUser.prototype.increment = function(){
  this.score++
}
createUser.prototype.printMe = function(){
  console.log(`price is ${this.score}`);
}
const chai =new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. this means that it has access to properties and methods defined on the constructors prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. The javascript assumes this, the newly created object, to be the intended return value.

The object is returned: After the constructor function has been called, if it doesnt return a non-primitive value(object, array, function, etc), the newly created object is returned.

*/