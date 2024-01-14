class User {
  constructor (username){
    this.username = username
  }

  logMe(){
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User{
  constructor(username, email, password){
    super(username)
    this.email = email;
    this.password = password;
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`);
  }
}

const user1 = new Teacher("userOne", "user@gmail.com", "123")
user1.addCourse()
user1.logMe()

const user2 = new User("userTwo")
user2.logMe()

console.log(user1 === user2);

console.log(user1 instanceof Teacher);