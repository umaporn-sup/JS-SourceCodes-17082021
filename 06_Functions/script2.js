// The following let variables are defined in the global scope
let mid = 20;
let final = 5;

let fname = 'Ada';

//sum function is defined in the global scope
function sum() {
  return mid + final;
}

console.log(`#1 sum: ${sum()}`); // Returns 25
mid = 10;
console.log(`#2 sum: ${sum()}`); // Returns 15

function getScore() {
  let mid = 10;
  let final = 30;
  //yourScore is nested function example
  function yourScore() {
    let mid = 5;
    final = 9;
    return fname + ' scored ' + (mid + final);
  }

  return yourScore(); //not equals to "return yourScore"
}

console.log(getScore()); // Returns "Ada scored 40"
