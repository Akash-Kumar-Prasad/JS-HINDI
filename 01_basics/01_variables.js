const accountId =144553
let emailId = "akash@yahoo.com"
var accontPassword = "12345" 
accountCity = " Kolkata "
let accountState;
console.table([accountId, emailId, accontPassword, accountCity, accountState]); 
// accountId =22 //not allowed
//const cannot be change once it has been declared and initialized
emailId= "akash hhhhhhh"
accontPassword= "asdfdsa"
accountCity= "Bengaluru"

console.table([accountId, emailId, accontPassword, accountCity, accountState]);

/*
prefer not to use var 
issue with block scope and functional scope
*/