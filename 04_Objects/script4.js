function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    console.log(this.name);
  };
}
let person1 = new Person('Pot', 40, 'Tester');
let person2 = new Person('Joe', 20, 'Doctor');
person1.sayName(); //"Pot"
person2.sayName(); //"Joe

console.log(Person.prototype.isPrototypeOf(person1));
console.log(Object.prototype.isPrototypeOf(person1));

Person.prototype.greeting = function () {
  return `Hello, ${this.name}`;
};

console.log(person1.greeting());
