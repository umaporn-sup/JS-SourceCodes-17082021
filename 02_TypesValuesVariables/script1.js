//Weakly and Dynamic Types
let value;
value = 0;
console.log(`value (line#4) is ${value} on typeof ${typeof value}`);
value = 'hello' + ' world';
console.log(`value (line#5) is ${value} on typeof ${typeof value}`);
value = new Date();
console.log(`value (line#7) is ${value} on typeof ${typeof value}`);
value = function (num) {
  return num + num;
};
console.log(`value (line#9) is ${value} on typeof ${typeof value}`);
