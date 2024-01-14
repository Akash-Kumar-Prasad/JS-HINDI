function User(email, password){
this._email = email;
this._password = password;

Object.defineProperty(this, 'email', {
  get: function(){
    return this._email.toUpperCase()
  },
  set: function(value){
    this._email = value
  }
})

Object.defineProperty(this, 'password', {
  get: function(){
    return `${this._password.toUpperCase()}5233`
  },
  set: function(value){
    this.password = value
  }
})
}

const one = new User("alkk@haj.com", "asjhkgfd")
console.log(one.email);
console.log(one.password);