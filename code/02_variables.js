const acctId = 8762862;
// accId cannot be updated because it is a constant.

let accEmail = "xyz@gmail.com";
// let allows reassignment.

var accPassword = "28bak81lk";
/*
var is not recommended in modern JavaScript due to its quirks. So, we prefer not to use var because of issue in block scope and functional scope.
*/

accCity = "Guwahati";
/*
accCity is not declared with let or var, so it becomes a global variable & this is not recommended as it can lead to unexpected behavior.
*/

let accountState;
// accountState is declared but not initialized.

accEmail = "axoi@gmail.com";
accPassword = "52790028261";
accCity = "Tezpur";

console.log(acctId);
// Outputs the constant account ID.

console.table([acctId, accEmail, accPassword, accCity, accountState]);
// Outputs the variables in a table format for better readability.
