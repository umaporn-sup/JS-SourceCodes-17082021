let product = {
  productId: 'P001',
  productName: 'iphone',
  price: 15000,
  stocks: 10
};
const productsEle = document.querySelector('#products');
console.log(productsEle);

const divProductEle = document.createElement('div');
//1.<div></div>
divProductEle.setAttribute('id', product.productId);
//2. <div id='p001'></div>
const pProductNameEle = document.createElement('p');
//3. <p></p>
pProductNameEle.textContent = product.productName;
//4. <p>iphone</p>;
divProductEle.appendChild(pProductNameEle);
//5.<div id='p001'><p>iphone</p></div>
productsEle.appendChild(divProductEle);
//6.<div id="products"><div id='p001'><p>iphone</p></div></div>;
