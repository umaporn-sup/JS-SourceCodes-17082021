//Group 7
const li = document.querySelector('#Section1 .group7');
li.textContent = 'WORK HARD DIE FAST';

// Group 4
const listG4 = document.querySelector('#Section1 .group4');
listG4.textContent = 'kiminoto';

//Group 2
const groupName = document.querySelector('.group2');
groupName.textContent = 'int201_group2';

//Group 6
let text = document.querySelector('div > ul li.group6');
text.innerHTML = '<b>Hew Kaw</b>';

//Group 1
var g1 = document.querySelector('.group1');
g1.innerHTML = 'sleep in the class';

//Group 3
document.querySelector('.group3').textContent = 'HBD เจด้วย ,เจเกิดเมื่อวาน ';
document.querySelector('.group3').innerHTML += '<b>เย้</b>';

//Group 5
const g5 = document.querySelector('#Section1 .group5');
g5.textContent = 'ในเลข 5 มีน้ำตาซ่อนอยู่';

//Group 10
const group10 = document.querySelector('.group10');
group10.innerHTML = 'shine dream smile';

//Group 9
let group9 = document.getElementsByClassName('group9')[0];
group9.append('YOU NEVER CODING ALONE');

//Group 8
let textGroup8 = document.querySelector('.group8');
textGroup8.textContent = 'ถ้าเธอใช่ใน if ต่อให้อีกกี่ else ก็หมดความหมาย';
let attStyle = document.createAttribute('style');
attStyle.value = 'color:red';
textGroup8.setAttributeNode(attStyle);
