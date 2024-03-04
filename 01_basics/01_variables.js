const accountId = 234512
let accountEmail = "shalini123@gmail.com"
var accountPassword = "234589"
accountCity = "jaipur"

// accountId = 2 //not allowed

accountEmail = "shalini@gmail.com"
accountPassword = "34134566"
accountCity = "Bihar"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail,accountPassword, accountCity, accountState]);