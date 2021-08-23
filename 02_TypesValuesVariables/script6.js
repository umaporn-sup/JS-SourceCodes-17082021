//let, const, var -> scope of variable

//const cannot be updated
//let and var can be updated
//var can re-declare  but let and const cannot be re-declared

//var with global scope,  under window object
var std = 10;
var std = 'myStudent'; //redeclared std variable
function doSomething() {
  //var with local scope
  var msg = 'INT201-JS';
  console.log(msg);
}
// console.log(msg);
console.log(std);
