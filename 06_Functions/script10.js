//examples of arguments object
let products = [
  { prodId: 1, price: 10, amount: 2 },
  { prodId: 2, price: 5, amount: 10 }
];

const prodFunc = (_, total = 0) => {
  console.log(total);
};

prodFunc('throwable', products);

let results = products.reduce((total, product) => total + product.price, 0);
console.log(results);
