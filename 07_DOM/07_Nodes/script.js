const pElement = document.getElementsByTagName('p');
console.log(`pElement.length: ${pElement.length}`); //2
if (pElement[0].nodeType === Node.ELEMENT_NODE) {
  console.log(`node name: ${pElement[0].nodeName}`); //p
  console.log(`node value: ${pElement[0].nodeValue}`); //null
  console.log(`node type: ${pElement[0].nodeType}`); //1
}
if (pElement[1].getAttributeNode('id').value === 'second')
  //true
  console.log(`found 2nd <p> element`);
