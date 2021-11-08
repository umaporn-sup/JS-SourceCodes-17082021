// encodes characters such as ?,=,/,&,:
console.log(`?x=${encodeURIComponent("test?/&")}`);
// expected output: "?x=test%3F"
console.log(`?x=${decodeURIComponent("test?/&")}`);

const url = "https://www.sit.kmutt.ac.th";
console.log(`encode: ${encodeURIComponent(url)}`);
//https%3A%2F%2Fwww.sit.kmutt.ac.th
console.log(`decode: ${decodeURIComponent(url)}`);

const queryComponent = "?q=search";
console.log(encodeURIComponent(queryComponent)); //"%3Fq%3Dsearch"
const urlQueryComponent = url + encodeURIComponent(queryComponent); //https://www.sit.kmutt.ac.th%3Fq%3Dsearch
console.log(urlQueryComponent);
