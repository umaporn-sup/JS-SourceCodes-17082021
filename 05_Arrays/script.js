// let students = [
//   { id: 1, name: 'Ann' },
//   { id: 2, name: 'Peter' },
//   { id: 3, name: 'Mary' }
// ];
// // console.log(students[0]);
// students[students.length - 1].name = 'Umaporn';
// // console.log(students[students.length - 1]);

// let students2 = [1, ...students, 100];
// students2[1].name = 'XYZ';
// console.log(students2[1]);
// console.log(students);

// students.forEach((item) => (item.id = item.id + 1));
// console.log(students);

let sum = function findSum(n) {
  if (n <= 1) return 1;
  else return n + sum(n - 1);
};
console.log(sum(5));

let values = [5, 4, 3, 2, 1];

let total = values.reduce((tot, current) => tot + current, 0);
console.log(total);

let articles = [
  'can',
  'you',
  'ever',
  'do',
  'some',
  'thing',
  'when',
  'you',
  'have',
  'some',
  'time',
  'for',
  'some',
  'one'
];
console.log(
  articles.reduce((words, cur) => {
    if (!words[cur]) words[cur] = 1;
    else words[cur] = words[cur] + 1;
    return words;
  }, {})
);
const names = ['Adam', 'Mary', 'Joe'];

const sayHi = names.map((name) => `Hi ${name}`);
// console.log(sayHi);

const echo = (msg) => msg;
console.log(echo('Umaporn'));
console.log(echo('INT201'));

const toUpperCase = (text) => text.toUpperCase();
names.forEach((n) => console.log(toUpperCase(sayHello(n))));

const orders = [
  { productTitle: 'Product 1', amount: 2, price: 5 },
  { productTitle: 'Product 2', amount: 10, price: 10 },
  { productTitle: 'Product 3', amount: 4, price: 50 },
  { productTitle: 'Product 4', amount: 1, price: 100 }
];

let totalAmount = orders.reduce((totAmt, cur) => totAmt + cur.amount, 0);
console.log(totalAmount);

let totalPrice = orders.reduce(
  (totAmt, cur) => totAmt + cur.amount * cur.price,
  0
);
console.log(totalPrice);
