//in javascript everything necessarily is an object at the most upper level in itself, it means that say you declare an array or define a function or an object they all come down to OBJECTS,
//if any functionality is said to be added after performing the above operations then we need to access the prototype then write the desired thing and define it wisely
//at the most upper level if directly anything is accessed and something is added then all below that will share the same thing, not vice versa


// let myName = "akash"
// console.log(myName.LtrueLength());

let myHeroes = ["thor", "spiderman"]

let heroPower = {
  thor:"hammer",
  spiderman:"sling",

  getSpiderPower: function(){
    console.log(`spidey power is ${this.spiderman}`);
  }
}

Object.prototype.hitesh = function(){
  console.log(`akash is present in all objects`);
}

Array.prototype.heyHitesh = function(){
  console.log(`Says hello`);
}
//heroPower.hitesh()
myHeroes.hitesh()
myHeroes.heyHitesh()
//heroPower.heyHitesh()


//INHERITANCE

const User = {
  name:'manMam',
  email:"man@man.com"
}
const Teacher = {
  makeVideo: true

}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime:true,
  __proto__:TeachingSupport
  //__proto__ borrows the keyvalue pairs of other objects that is given there
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "chaiaurcode       "
String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`true length is ${this.trim().length}`);
}
anotherUsername.trueLength()

"hitesh".trueLength()

"icetea".trueLength()