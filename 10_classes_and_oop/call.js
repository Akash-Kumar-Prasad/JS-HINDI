function setUsername (username){
  //sets the execution context for itself
  this.username = username
  console.log("called");
}
//here the context is passed to the current running function via this keyword, 
function createUser(username, email, password){
  setUsername.call(this, username)
  //here, the .call is used to call a outer function inside the function which doesnt have the variable, so it is necessary to provide a this keyword so as to change the execution context
  this.email = email
  this.password = password
}

const chai = new createUser("hihi", "asdfg@gmail.com", "1234")
console.log(chai);