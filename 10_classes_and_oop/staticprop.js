class User{
constructor(username){
  this.username = username;
}

logMe(){
  console.log(`username is ${this.username}`);
}
//static keyword stops other instances to access any function to which it has been attached to
static createId(){
  return `123`
}

}

const Akash = new User("akash")
//console.log(Akash.createId());

class Teacher extends User {
  constructor(username, email){
    super(username)
    this.email = email
  }
}

const newUser = new Teacher("Man", "i@phi=one.com")
newUser.logMe()
//console.log(newUser.createId());