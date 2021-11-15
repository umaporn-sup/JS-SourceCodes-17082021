export class Cart {
  constructor() {
    this._items = [];
  }
  getItems() {
    return this._items;
  }
  addItem(product) {
    let foundIndex = -1;

    foundIndex = this._items.findIndex(
      (item) => product.productId === item.productId
    );

    if (foundIndex === -1) {
      this._items.push({ productId: product.productId, qty: 1 });
    } else {
      this._items[foundIndex].qty += 1;
    }
  }
  saveItems() {
    localStorage.setItem('cart', JSON.stringify(this._items));
  }
  loadItems() {
    this._items = localStorage.getItem('cart');

    if (this._items == undefined || this._items.length === 0) {
      this._items = [];
    } else {
      this._items = JSON.parse(this._items);
    }
  }
}
