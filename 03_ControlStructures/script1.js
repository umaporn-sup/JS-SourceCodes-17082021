// rounding error, it affects any programming language that uses binary floating-point numbers.
let x = 0.3 - 0.2;
let y = 0.2 - 0.1;
console.log(x === y);
console.log(x === 0.1);
console.log(y === 0.1);

console.log(`x = ${x}`);
console.log(`y = ${y}`);

//if-else
const n = 1;
if (n === 1) console.log('You have 1 new message.');
else console.log(`You have ${n} new messages.`);
//switch...case
const month = 'JUNE';
switch (month) {
  case 'JANUARY':
    console.log('the first month');
    break;
  case 'JUNE':
    console.log('the 6th month');
    break;
  case 'DECEMBER':
    console.log('the last month');
    break;
  default:
    console.log('not our focus months');
}
//while
console.log('while');
let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

//do...while
console.log('do...while');
count = 0;
do {
  console.log(count);
  count++;
} while (count < 10);

//for
console.log('for');
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//for-in
console.log('for-in');
let students = { id: 1, name: 'Adam', age: 20 };
for (const property in students) {
  console.log(property + ':' + students[property]);
}
//for-of
console.log('for-of');
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for (let item of data) {
  sum += item;
}
console.log(`sum = ${sum}`);
