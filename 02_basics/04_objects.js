const tinderUser= new Object()
//singleton object empty object declared

const userTinder= {}
//literal empty object declared

console.log(tinderUser);
console.log(userTinder);
//both the objects are empty as seen in the output with braces

tinderUser.id="123ert"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "regular@some.com",
    fullname:{
        userfullname:{
            firstname:"akash",
            middlename:"kumar",
            lastname: "prasad"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1={
    a:1,
    b:2 
}
const obj2={
    c:3,
    d:4,
    a:5
}

const obj3= Object.assign(obj1, obj2)
console.log(obj3);
//target object is obj1, which will eventually be changed

//another way to do the assign() method is below
const obj4= Object.assign({}, obj1, obj2)
console.log(obj4);
//here an empty object is geiven in the target parameter of the object after that all the sources are given

//Objects.assign() is a static method and copies all own
//properties from one or more source objects to a target object.
//it returns the modified target object.
//properties in the target object are overwritten by
//properties in the sources if they have the same key

const obj5= {...obj1, ...obj2}
console.log(obj5);//spread operator used to join two objects

const users= [
    {
        id:1,
        email:"a@somee.com"
    },
    {
        id:1,
        email:"a@somee.com"
    },
    {
        id:1,
        email:"a@somee.com"
    },
    {
        id:1,
        email:"a@somee.com"
    }
]
//we'll see many times that when data comes database it comes in the form of array of objects with different elements in it, then we need to access them with dot notation, suppore you have to loop through or get a desired value then.

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
//the output you get here will be in the form of array
//keys are segregated from it value part and given to us

console.log(Object.values(tinderUser));
//the form output will be in the array and all the values will be provided here 

console.log(Object.entries(tinderUser));
//entries() give the output as individual key value pair arrays 

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
//hasOwnPropert() gives result as boolean value, it checks if a key is there or not

//******DESTRUCTURING***** */

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor: "hitesh choudhary"
}

//course.courseInstructor > this can be used to access the values but instead destructuring is used here and anither name is also given

const {courseInstructor: instructor}= course
console.log(instructor);
