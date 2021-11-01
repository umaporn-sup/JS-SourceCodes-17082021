//G1 149 นำเสนอ
const group1 = document.querySelector('#Section3 .group1');
const attrValue = group1.getAttribute('class');
group1.innerText = attrValue + ' ' + 'หายไปไหน';
//Group2
//กลุ่ม 2 รหัส 108 นำเสนอ
const g2 = document.querySelector('#Section3 .group2');
const name = g2.getAttribute('class');
g2.textContent = name + ' hello world';
//Group3
// กลุ่ม 3 รหัส 131 นำเสนอ
const myGroup = document.querySelector('#Section3 .group3');
myGroup.textContent = `${myGroup.className}: อมรเอาให้`;
//Group4
// กลุ่ม 4 รหัส 142
const group4 = document.querySelector('#Section3 .group4');
const att = group4.getAttribute('class');
group4.textContent = att + ' : ' + "Don't know anything";
//Group5
//กลุ่ม 5 116 present
const group = document.querySelector('#Section3 .group5');
const classname = group.getAttribute('class');
group.textContent = classname + ':' + ' สองทุ่มเเจกัน';
//Group6
//กลุ่ม 6 รหัส 118 นำเสนอ
const group6 = document.querySelector('#Section3 .group6');
const value = group6.getAttribute('class');
group6.textContent = value + ' : sleep all days ';
//Group7
//Group7 135 นำเสนอ
const group7 = document.querySelector('#Section3 .group7');
const nameG7 = group7.getAttribute('class');
group7.textContent = `${nameG7} We're not a great programmer; We're just a good programmer with great habits.`;
//Group8
let g8 = document.querySelector('#Section3 .group8');
let valueG8 = g8.getAttribute('class');
g8.innerText = `<h2>${valueG8}</h2>`;
//Group9
//กลุ่ม 9 คนนำเสนอ 63130500160
const group9 = document.querySelector('#Section3 .group9');
let attributeName = group9.getAttribute('class');
group9.textContent = `${attributeName} hello javaScript`;
//Group10
// กลุ่ม 10 รหัส 127 นำเสนอ
function setMyLi() {
  let myLi = document.querySelector('#Section3 > ul > .group10');
  let text = 'Fail Fast Succeed Faster';
  let className = myLi.getAttribute('class');
  myLi.innerText = `${className} ${text}`;
}

setMyLi();
