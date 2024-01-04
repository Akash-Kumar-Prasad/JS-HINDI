//object literal
const user = {
  username : "akash",
  loginCount: 8,
  signedIn : true,
  getUserDetails: function(){
    //console.log("got user details from database");
    //console.log(`username is ${this.username}`);
    console.log(this);
  }

}

//constructor function
//new keyword is a constructor function, it allows us to make multiple instances of a single object literal

function User(username, loginCount, isLoggedIn){
  this.username= username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  //it doesnt really matter if you return "this" or not, it implicitly returns all
  this.greetings = function(){
    console.log(`Welcome ${this.username}`);
  }
  return this
}

const userOne =new User("hitesh",4, true)
const userTwo = new User("chai aur code", 12, false)
console.log(userOne.constructor);
//console.log(userTwo);
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);