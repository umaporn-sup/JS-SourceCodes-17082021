let letters = [...'Hello world']; // An array of letters
let msg = '';
for (let ch of letters) {
  msg += ch + ', ';
}
console.log(msg);

let value = '';
for (let [index, letter] of letters.entries()) {
  if (index % 2 === 0) value += letter; // letters at even indexes
}
console.log(`value: ${value}`); // "Hlowrd"

let x = 3;
let y = 4;
[x, y] = [y, x];
console.log(x);
console.log(y);
