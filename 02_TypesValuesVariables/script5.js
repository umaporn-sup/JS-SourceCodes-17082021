1 + ' objects'; //"1 objects":  Number 1 converts to a string
'5' * '4'; // 20: both strings convert to numbers
let n = 'y' + 1; // n == NaN; string "y" can't convert to a number

console.log(`1 + ' objects' is ${1 + ' objects'}`);
console.log(`'5' * '4' is ${'5' * '4'}`);
console.log(`n = ${n}`);

console.log(`null == undefined is ${null == undefined}`); // true: These two values are treated as equal.
console.log(`'0' == 0 is ${'0' == 0}`); //  true: String converts to a number before comparing.
console.log(`0 == false is ${0 == false}`); //  true: Boolean converts to number before comparing.
console.log(`'0' == false is ${'0' == false}`); //  true: Both operands convert to 0 before comparing.

//The “strict equality operator,” ===, does not consider its operands to be equal if they are not of the same type
console.log(`null === undefined is ${null === undefined}`); // false: no conversion before comparing
console.log(`'0' === 0 is ${'0' === 0}`); //  false: no conversion before comparing
console.log(`0 === false is ${0 === false}`); //  false: no conversion before comparing
console.log(`'0' === false is ${'0' === false}`); //  false: no conversion before comparing

//Explicit Conversions
Number('3'); //  3
String(false); // "false"
Boolean([]); //  true
