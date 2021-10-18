function ops(mthFunc, arr) {
  return mthFunc(...arr);
}
let nums = [2, 3];
let sum = (num1, num2) => num1 + num2;
let multiply = (num1, num2) => num1 * num2;
console.log(ops((num1, num2) => num1 + num2, nums));
console.log(ops(multiply, nums));
