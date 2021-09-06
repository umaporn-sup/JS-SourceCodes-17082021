//different element types in one array
let arr1 = [10, 'in progress', true];

console.log(arr1);
console.log(`typeof arr1: ${typeof arr1}`);
//array of objects
let students = [
  {
    id: 1,
    name: 'Ann'
  },
  { id: 2, name: 'Peter' },
  { id: 3, name: 'Mary' }
];
console.log(students);

//array of arrays
let colors = [
  ['pink', 'red'],
  ['yellow', 'orange', 'brown']
];

console.log(colors);
console.log(`colors.length: ${colors.length}`);
console.log(`colors[0].length: ${colors[0].length}`);
console.log(`colors[1].length: ${colors[1].length}`);

//arrays are dynamic size
students[2] = { id: 101, name: 'Joe', gpax: 3.0 };
students[5] = { id: 109, name: 'Pat', gpax: 3.5 };
console.log(students);
console.log(`length of students: ${students.length}`);
