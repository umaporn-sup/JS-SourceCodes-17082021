// //1. Traverse
// const h21Ele = document.querySelector('#h21');
// h21Ele.textContext = "<span style='color:red'>styling text</span>";
// console.log(h21Ele.textContent);

// console.log(h21Ele.firstChild);
// const ulEle = document.getElementById('u11');
// console.log(ulEle);
// console.log(ulEle.nodeType === Node.ELEMENT_NODE);
// console.log(ulEle.tagName);
// console.log(ulEle.childElementCount);
// console.log(ulEle.firstChild);
// console.log(ulEle.firstElementChild);
// console.log(ulEle.firstElementChild.nextElementSibling);

// const liU11Ele = document.getElementById('u11').getElementsByClassName('prog');
// console.log(`liU11Ele: ${liU11Ele.length}`);

// const ulAttr = document.getElementsByTagName('ul')[0].getAttributeNode('prog');
// console.log(ulAttr);
// console.log(ulAttr.nodeType === Node.ATTRIBUTE_NODE);

// const u11Ele = document.querySelector('#u11');
// console.log(u11Ele);

// const progEle = document.querySelectorAll('.prog');
// console.log(progEle);

// const htmlEle = document.querySelector('html');
// console.log(htmlEle.firstElementChild);

// //2.insert, append, replace, and remove
// const u12Ele = document.querySelector('#u12');
// console.log(u12Ele);
// let temp = ulEle.firstElementChild;
// const countChilds = ulEle.childElementCount;
// for (let i = 0; i < countChilds; i++) {
//   let newLi = document.createElement('li');
//   newLi.textContent = temp.textContent;
//   let attNames = temp.getAttributeNames();
//   console.log(`att name ${attNames[0]}`);
//   let newAtt = document.createAttribute(attNames[0]);
//   newAtt.value = temp.getAttribute(attNames[0]);

//   newLi.setAttributeNode(newAtt);
//   u12Ele.appendChild(newLi);
//   temp = temp.nextElementSibling;
//   console.log(temp);
// }

// //3. document element
// console.log(document.nodeType);
// console.log(document.title);
// console.log(document.documentElement.nodeType);
// let htmlEle2 = document.documentElement;
// console.log(htmlEle2);
// const divEle = document.querySelectorAll('div');
// console.log(divEle[0].childElementCount);
// console.log(divEle[0].nextElementSibling);
// console.log(divEle[0].nodeType === Node.ELEMENT_NODE);

// const pEle = document.createElement('p');
// pEle.textContent = 'My Group';

// const secondLi =
//   divEle[0].firstElementChild.firstElementChild.nextElementSibling;

// divEle[0].firstElementChild.insertBefore(pEle, secondLi);

// const groupEle = document.querySelector('#Section3 .group3');
// console.log(groupEle);
// let txt = groupEle.getAttribute('class');
// txt += 'Fail Fast';
// groupEle.textContent = txt;
