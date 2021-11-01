//query products element
const divProductsEle = document.querySelector('#products');
console.log(divProductsEle);

/* <div id="P001">
  <p>product id: P001</p>
  <p>product name: iphone </p>
  <p>price: 10000 Baht</p>
  <p>stock:10</p>
</div>; */
let product = {
  productId: 'P001',
  productName: 'iphone',
  price: 10000
};

//1. create div element
//1. <div></div>
const divProductEle = document.createElement('div');

//2. create id attribute on div element
//2.<div id='P001'
divProductEle.setAttribute('id', product.productId);

//3. create<p> for product id

const pProductIdEle = document.createElement('p');
pProductIdEle.textContent = product.productId;
//  <div id='P001'><p>P001</p></div>
divProductEle.appendChild(pProductIdEle);

//4. create<p> for product name
//  <p>iphone</p>
const pProductNameEle = document.createElement('p');
pProductNameEle.textContent = product.productName;
//  <div id='P001'><p>P001</p><p>iphone</p></div>
divProductEle.appendChild(pProductNameEle);

//5. create<p> for product price
//  <p>10000 Baht</p>
const pProductPriceEle = document.createElement('p');
pProductPriceEle.textContent = product.price + ' Baht';
//  <div id='P001'><p>P001</p><p>iphone</p><p>1000 Baht</p></div>
divProductEle.appendChild(pProductPriceEle);

//6. add product element to products element
divProductsEle.appendChild(divProductEle);
