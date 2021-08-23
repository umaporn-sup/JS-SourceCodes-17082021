//Primitive types (String, Boolean, Number, BigInt, Symbol, undefined) pass by value
function primitivePassingValue(value) {
  value = value + 1;
}

let x = 1;
primitivePassingValue(x);
console.log(x); //1

let y = 'A';
primitivePassingValue(y);
console.log(y); //"A"

//Non Primitive types (object/null) Pass by reference
function objectPassingReference(value) {
  value.prop = value.prop + 1;
}

let obj = { prop: 1 };
objectPassingReference(obj);
console.log(obj.prop); // 2

let nullObj = { prop: 'A' };
objectPassingReference(nullObj);
console.log(nullObj.prop); //A1
