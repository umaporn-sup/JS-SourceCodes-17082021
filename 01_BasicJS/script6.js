/*let variables*/
//greeting is block scope,
let greeting = 'Hey';
//let variables cannot be re-declared, only can be updated
greeting = 'Ho Ho';

function greeter() {
  //msg is function scoped, we cannot access the variable msg outside of a function
  let msg = 'hello';
  let greeting = 'Good morning';
  console.log(`greeting in function is ${greeting}`);
}
// console.log(msg); //error: msg is not defined
greeter();
console.log(greeting);

let year = 'leap';
if (year === 'leap') greeting = 'Hey 366 days';
console.log(greeting);
