//Created Object with Object literals

//An object literal is an expression that creates and initializes a new and distinct object each time it is evaluated.
let employee = { empId: 123, name: 'Joe' };
console.log(employee);

//An object is a composite value: primitive values or other objects.
let book = {
  isbn: 123456789,
  title: 'JavaScript',
  author: {
    firstname: 'Umaporn',
    lastname: 'Sup'
  }
};

console.log(book);
//getting object property
console.log(book.isbn);
console.log(book['title']);
//create or setting object property
book.author.firstname = 'Uma';
book['publishedYear'] = 2000;
console.log(book);

//Creating Objects with "new" operator by invoking constructor to initialize a newly created object.
//call built-in constructors for its built-in types
let o = new Object(); // Create an empty object: same as {}.
let a = new Array(); // Create an empty array: same as [].
let d = new Date(); // Create a Date object representing the current time
let r = new Map(); // Create a Map object for key/value mapping

// objects is as hash tables: a grouping of name-value pairs where the value may be data or a function.
//This example creates an Object prototype
//person that has two properties (name and age) and one method (greeting()).
let person = new Object();
person.name = 'Adam';
person.age = 29;

person.greeting = function () {
  console.log('Hello, ' + person.name);
};
person.greeting();
console.log(typeof person); //object

//create object literal with no property
let emptyObj = {};
emptyObj.name = 'abc';
console.log(typeof emptyObj); //object
console.log(emptyObj.name); //"abc"

//create object without class
//The function distance does not care whether the arguments are an instance of the class Point
function distance(p1, p2) {
  console.log(typeof p1); //object
  console.log(typeof p2); //object
  // ** - The exponentiation assignment operator
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
}

console.log(distance({ x: 1, y: 1 }, { x: 2, y: 2 })); //1.4142135623730951

//Create Class and constructor functions
//Recommendation to wrapping property and function within a single unit
//A class can be composed of the class's constructor method, instance methods, getters, setters, and static class methods.

class Rectangle {
  constructor(width, height) {
    //invoke by new operator
    // Everything added to 'this' will exist on each individual instance
    this._width = width;
    this._height = height;
    alert('Rectangle constructor working');
  }
  // Everything defined in the class body is defined on the class prototype object and sharing between instances.
  area() {
    return this._width * this._height;
  }

  get width() {
    return this._width;
  }
  set width(newWidth) {
    this._width = newWidth;
  }
  get height() {
    return this._height;
  }
  set height(newHeight) {
    this._height = newHeight;
  }

  toString() {
    return (
      'width = ' +
      this._width +
      ', height = ' +
      this._height +
      ', area = ' +
      this.area()
    );
  }
}
let rec1 = new Rectangle(2.5, 3.5);
console.log(rec1.width); //2.5
console.log(rec1.height); //3.5
console.log(rec1.area()); //8.75
console.log(rec1.toString()); //width = 2.5, height = 3.5, area = 8.75

//create object with Object.create()
let square = Object.create(rec1);
square.perimeter = function () {
  return 4 * this.width;
};
console.log(square.width); //2
console.log(square.height); //3
console.log(square.area()); //6
console.log(square.perimeter()); //8
console.log(Object.prototype.isPrototypeOf(rec1)); //true
console.log(Rectangle.prototype.isPrototypeOf(square)); //true
console.log(Object.prototype.isPrototypeOf(square)); //true
console.log(Object.getOwnPropertyNames(square)); //perimeter
console.log(square.toString()); //width: 2, height = 3
console.log(square instanceof Rectangle); //true
console.log(square instanceof Object); //true

//An Object is passing by references
let point = { x: 10, y: 20 };
let newPoint = point;
console.log(point); //{ x: 10, y: 20 }
newPoint.x = 30;
console.log(point); //{x:30, y:20);
