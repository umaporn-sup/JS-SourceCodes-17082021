let langs = ['HTML', 'JavaScript', 'Nodejs'];
const langElement = document.querySelector('#programlang');

//create <p> element with text node
pElement = document.createElement('p');

//add "id" attribute to <p>
pElement.setAttribute('id', 'pId');
console.log(`attr: ${pElement.getAttribute('id')}`);

const msg = document.createTextNode('Hello, Text Node');
pElement.appendChild(msg);
document.body.insertBefore(pElement, langElement);

//child node of p is text node
//console.log(`The first child of <p> : ${pElement.firstChild}`); //text

//create comment node
const commentNode = document.createComment(
  'This is comment before <li> created'
);
langElement.appendChild(commentNode);

//create <li> node list
for (const lang of langs) {
  let li = document.createElement('li');
  li.innerHTML = lang;
  langElement.appendChild(li);
}
//child node of <ul> is comment node
console.log(`first child node: ${langElement.firstChild}`); //comment node
//child element of <ul> is <li> element node
console.log(`first child element: ${langElement.firstElementChild}`); // <li> node

const firstLangElement = langElement.firstElementChild;
const newLangNode = document.createElement('li');
newLangNode.innerHTML = 'Java';
langElement.insertBefore(newLangNode, firstLangElement);
const newLastLangNode = document.createElement('li');
newLastLangNode.innerHTML = 'C++';
langElement.insertBefore(newLastLangNode, null);

langElement.replaceChild(newLastLangNode, newLangNode);
langElement.removeChild(langElement.firstElementChild);

const newDiv = document.createElement('div');
newDiv.innerHTML = '<p>Create new paragraph element</p>';
document.body.appendChild(newDiv);

const fragment = new DocumentFragment();
langs.forEach((language) => {
  let li = document.createElement('li');
  li.innerHTML = language;
  fragment.appendChild(li);
});

newDiv.appendChild(fragment);
