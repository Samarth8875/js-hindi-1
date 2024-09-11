const accountId = 144553
let accountEmail="samarth@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // not allowed

accountEmail = "sa@sa"
accountPassword = "21212121"
accountCity = "Agra"

console.log(accountId);
/*
Prefere not to use var
because of issue in block space and functional scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
