const acctId = 8762862;
/*
accountId cannot be updated
because it is a constant
*/

let accEmail = "xyz@gmail.com";

var accPassword = "28bak81lk";
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accCity = "Guwahati";
let accountState;

accEmail = "axoi@gmail.com";
accPassword = "52790028261";
accCity = "Tezpur";

console.log(acctId);

console.table([acctId, accEmail, accPassword, accCity, accountState]);
