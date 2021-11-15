import { Cart } from './Cart.js';
const myCart = new Cart();
// myCart.addItem({ productId: 1001, qty: 1 });
// myCart.addItem({ productId: 1002, qty: 1 });
// myCart.addItem({ productId: 1001, qty: 1 });
// console.log(myCart.getItems());
// myCart.saveItems();
myCart.loadItems();
console.log(myCart.getItems());
