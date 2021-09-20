function printStudents(students) {
  let result = '';
  // iterate through arguments
  let separator = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
console.log(printStudents('.', 'Adam', 'John', 'Danai'));
