# Objects

1. An object is a composite value: primitive values or other objects.
2. An object is an unordered collection of properties, each of which has a name and a value where the value may be data or a function.
3. Objects can be created in many ways:
   1. with object literals, object literal is a comma-separated list of {name: value} pairs.
   2. by using the "new" operator. Objects created using the new keyword and a constructor invocation use the value of the prototype property of the constructor function as their prototype.
   3. with the Object.create() function. Creates a new object, with specified prototypes.
4. JavaScript objects are dynamic—properties can usually be added and deleted

# Pass by Value and Pass by Reference

1. Primitive parameters, String, Boolean, Number, BigInt, Symbol, undefined, are passed to functions by value. If the function changes the value of the parameter, this change is not reflected in the calling function.
2. Non Primitive types (object/null) passing parameters to functions by reference. If the function changes the object's properties, that change is visible outside the function.

# Objects Comparision

1. Referential equality: 3 ways to compare objects:
   - The strict equality operator ===
   - The loose equality operator ==
   - Object.is() function
2. Manual comparison
   - A manual comparison of properties’ values.
3. Shallow Equality
   - check the properties’ values for equality.
