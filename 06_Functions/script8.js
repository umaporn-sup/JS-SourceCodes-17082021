let greeting = 'Welcome everyone in family';
function outer(name) {
  //higher order function
  let family = [];
  family.unshift(name);

  //inner is a closure function
  function inner(newMember) {
    console.log(greeting);
    family.unshift(newMember);
    return family;
  }

  return inner; //return inner function
}

const myInner = outer('Umaporn');
console.log(myInner('John'));
console.log(myInner('SuSan'));
