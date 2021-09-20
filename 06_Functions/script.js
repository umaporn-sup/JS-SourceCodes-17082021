//spread operator across the arguments in the function call.
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}
let nums = [5, 20, 15];
console.log(sum(...nums));

//destructuring array
function myClassStudents(lect, ta, ...students) {
  return students;
}

let myStudents = myClassStudents(
  'Umaporn',
  'Tisansi',
  'Peter',
  'Danial',
  'Joe'
);
console.log(myStudents);
console.log(myStudents.length);

//destructuring object
let { firstname, lastname, ...address } = {
  firstname: 'Umaporn',
  lastname: 'Supa',
  province: 'Bangkok',
  contact: '02-470-9810'
};
function yourAddress(addr) {
  return addr;
}
console.log(yourAddress(address));

//copy object properties with spread operator

let std1 = { id: 1, name: 'Adam' };
let std2 = { ...std1 };
std2.id = 444;
console.log(std1);
console.log(std2);
