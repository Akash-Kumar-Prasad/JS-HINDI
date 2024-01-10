//ES6

class User{
  constructor (username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword(){
    return `${this.password}abc`
  }

  capsUsername(){
    return `${this.username.toUpperCase()}`
  }
}

const Akshaya = new User ("akshaya", "akya@gmail.com","123098")
console.log(Akshaya);

console.log(Akshaya.encryptPassword());
console.log(Akshaya.capsUsername());

//behind the scene, if you dont have access to class option then you can do that above code using functions also
//at last everything narrow downs to ultimately objects in javascript, functions under the hood works as same as objects

function createUser(uname, mail, pass){
  this.uname = uname;
  this.mail = mail;
  this.pass = pass;
}

createUser.prototype.unameCaps = function(){
  return `${this.uname.toUpperCase()}`
}

createUser.prototype.mailLow = function(){
  return `${this.mail.toLowerCase()}`
}

createUser.prototype.encPass = function(){
  return `${this.pass}a1b2c3`
}

const Binodini = new createUser("binodini", "bini@yahoo.com", "bini45687")
console.log(Binodini);
console.log(Binodini.unameCaps());
console.log(Binodini.mailLow());
console.log(Binodini.encPass());

