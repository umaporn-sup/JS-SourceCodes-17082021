const soupMenu = document.querySelector('#soup');
console.log(soupMenu.parentNode); //<div class="menu">
console.log(soupMenu.parentElement); //<div class="menu">
let currentChildNode = soupMenu.firstElementChild; // <li class="meat">Spicy Bacon-Corn Soup</li>

while (currentChildNode !== soupMenu.lastChild) {
  if (currentChildNode.nodeType === 1) {
    console.log(currentChildNode);
  }

  currentChildNode = currentChildNode.nextSibling;
}

let count = soupMenu.childElementCount;
console.log(`count ${count}`);
while (count >= 1) {
  if (currentChildNode.nodeType === 1) {
    console.log(currentChildNode);
  }
  currentChildNode = currentChildNode.previousElementSibling;
  count--;
}
