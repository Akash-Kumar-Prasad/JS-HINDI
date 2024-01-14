class User{
  constructor (email, password){
    this.email = email
    this.password = password
  }

  get email(){
    return this._email.toUpperCase()
  }
  set email(value){
    this._email = value
  }

  get password(){
    // return this._password.toUpperCase()
    return `${this._password.toUpperCase()}hit`
  }
  set password(value){
    this._password = value
  }
}

const hitesh = new User("h@gmail.com", "asd12")
console.log(hitesh.password);
console.log(hitesh.email);