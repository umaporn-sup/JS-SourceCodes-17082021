/*var variables*/
//greeting is globally scope, it exists outside a function
var greeting = 'Hey';
//var variables can be re-declared and updated
var greeting = 'Ho Ho';
function greeter() {
  //msg is function scoped, we cannot access the variable msg outside of a function
  var msg = 'hello';
}
// console.log(msg); //error: msg is not defined
console.log(greeting);

var year = 'leap';
if (year === 'leap') var greeting = 'Hey 366 days';
console.log(greeting);
