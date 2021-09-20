console.log(square(3)); //calling functions and hoisting
function square(side) {
  return side * side;
}
console.log(square(5)); //calling functions

//let vs var scope (run with browser)
//Just like const the let does not create properties of the window object when declared globally (in the top-most scope).
var x = 'global';
let y = 'global';
console.log(this.x); // "global" , this is window object
console.log(window.y); // undefined
