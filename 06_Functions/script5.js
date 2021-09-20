//default parameters
function who(name = 'unknown') {
  return name;
}
console.log(who());
console.log(who('Umaporn'));

//rest parameters
function sum(opsName, ...theNumbers) {
  console.log(opsName);
  return theNumbers.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum('sum', 1, 2, 3)); //6
console.log(sum('sum', 1, 2, 3, 4, 5)); //15

//destructuring function arguments into parameters
function arrayAdd1(v1, v2) {
  return [v1[0] + v2[0], v1[1] + v2[1]];
}
console.log(arrayAdd1([1, 2], [3, 4])); // => [4,6]

function arrayAdd2([x1, y1], [x2, y2]) {
  // Unpack 2 arguments into 4 parameters
  return [x1 + x2, y1 + y2];
}
console.log(arrayAdd2([1, 2], [3, 4])); // => [4,6]
