# javascript and classes
yes, javascript does have classes. this feature was introduced with the ecmascript 2015 specification(often referred to as es6).
However it is important to note that javascript is primarily a prototype based language, and its classes are primarily syntactic sugar over existing prototype based inheritance mechanisms. In other words it provides a more familiar syntax for developers coming from class based languages such as Java, C++, but under the hood it works somewhat differently.
```javascript
class person {
  constructor (name, age){
    this.name = name;
    this.age = age;
  }
}
sayHello(){
  console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old`)
}
let person1 = new Person('John', 30)
person1.sayHello()
```


## OOP (its a programming paradigm)
## Object - collection of properties and methods
- toLowerCase

## why use OOP
parts of OOP 
object literal (means literally)

-Constructor Function
-Prototypes
-Classes
-Instance(new, this)


# 4 pillars
abstraction(details hide), encapsulation(wrap up data), inheritance(), polymorphism(many faces)