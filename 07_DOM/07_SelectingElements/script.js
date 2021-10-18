const domElementId = document.getElementById('myHeading');
const domByTagName = document.getElementsByTagName('ul');
const domByName = document.getElementsByName('color');
const domClassName = document.getElementsByClassName('list-item');
const domQuerySelector = document.querySelector('.heading');
const domQuerySelectorAll = document.querySelectorAll('.heading');
console.log(domElementId); //<h1 id="myHeading">Selecting Elements</h1>
console.log(domByTagName); //HTMLCollection(2) [ul.all-list-items,ul]
console.log(domByTagName.length); //2
console.log(domByTagName.item(0)); //<ul class="all-list-items">...</ul>
console.log(domByName); //NodeList(3) [input#colorRed, input#colorGreen, input#colorBlue]
console.log(domClassName); //HTMLCollection(6) [li.list-item, li.list-item,li.list-item, li.list-item, li.list-item, li.list-item]
console.log(domQuerySelector); //<h2 class="heading">Document Object Model</h2>
console.log(domQuerySelectorAll); //NodeList(2) [h2.heading, h2.heading]
console.log(document.forms); //HTMLCollection [form]
console.log(document.images); //HTMLColleciton(2) [img, img]
