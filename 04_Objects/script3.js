//Object Comparing
let student = { id: 1, name: 'Joe' };
let newStudent = { id: 2, name: 'Joe' };
let oldStudent = { id: 1, name: 'Joe' };
let alumniStudent = student;

//1. Referential equality
if (student == alumniStudent) {
  console.log('student equals to alumni student by ==');
  //student equals to alumni student by ==
}
if (student == newStudent) {
  console.log('student equals alumni student by ==');
}
if (student === alumniStudent) {
  console.log('student strictly equals to alumni student');
  //student strictly equals to alumni student.
}

if (student === newStudent) {
  console.log('student strictly equals to new student by ==');
}

/*The Object.is()method determines whether two values are the same value without type conversion  
  Both the same object means both object have same reference*/

if (Object.is(student, alumniStudent)) {
  console.log('student equals to alumni student by Object.is()');
  //student equals to alumni student by Object.is()
}
if (Object.is(student, newStudent)) {
  console.log('student equals to new student by Object.is()');
}

if (Object.is(student, oldStudent)) {
  console.log('student equals to old student by Object.is()');
}

//2.Compare properties manually
function isStudentEqual(object1, object2) {
  return object1.id === object2.id;
}

console.log(isStudentEqual(student, oldStudent)); //true
console.log(isStudentEqual(student, alumniStudent)); //true

//3. Shallow Equality
let book1 = {
  isbn: 123456789,
  title: 'JavaScript'
};

let book2 = {
  isbn: 123456789,
  title: 'JavaScript'
};

function shallowEquality(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  console.log(`keys1 : ${keys1}`);
  console.log(`keys2 : ${keys2}`);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}
console.log('shallow equality: ' + shallowEquality(book1, book2));

function isObject(obj) {
  return obj === Object(obj);
}
console.log(isObject(book1));
