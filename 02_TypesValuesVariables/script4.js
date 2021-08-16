//Arithmetic operators
console.log(5 + 2); // => 7: addition
console.log(5 - 2); // => 3: subtraction
console.log(5 * 2); // => 10: multiplication
console.log(5 / 2); // => 2.5: division

// JavaScript defines some shorthand arithmetic operators
let count = 0; // Define a variable
count++; // Increment the variable
count--; // Decrement the variable
count += 3; // Add 3: same as count = count + 3;
count *= 2; // Multiply by 2: same as count = count * 2;
console.log(`count = ${count}`); // => 6: variable names are expressions

//conditional operator
let result = count > 5 ? 'count > 5' : ' count<=5';
console.log(`result = ${result}"`);
//== and != non-strict equality
//If the two operands are different types, interpreter attempts to convert them to suitable type.
console.log(`15 == '15' ${15 == '15'}`); //true

//=== and!=== strict equality without type conversion
console.log(`15 === '15' ${15 === '15'}`); //false

//logical operators
// && (and), || (or), ! (not)

console.log(`5 < '10' && '1' > 5 is  ${5 < '10' && '1' > 5}`); //false

console.log(`5 < '10' || '1' > 5 is  ${5 < '10' || '1' > 5}`); //true
console.log(`!(0) is ${!0}`); //true
