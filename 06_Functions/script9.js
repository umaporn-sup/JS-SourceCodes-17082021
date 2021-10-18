//pattern#1
let result = 0;
//non-pure function
//free variable is result
const add = function (n1, n2) {
  result += n1 + n2;
  return result;
};

console.log(add(5, 2));
result = 10;
console.log(add(5, 2));

// //pattern#2
// function add2(n1, n2) {
//   return n1 + n2;
// }
