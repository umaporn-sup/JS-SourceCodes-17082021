# INT201 Client Side Web Programming I (1/2564)

## Control Structures

# Selection Statements

1. if (condition) statement1 else statement2
2. if (condition1) statement1 else if (condition2) statement2 else statement3
3. Conditional Operator assigns a value to a variable based on some condition
   (condition)?value1:value2
4. switch statement is evaluated once. The value of the expression is compared with the
   values of each case. If there is a match, the associated block of code is executed. If there is no match, the default code block is executed.
   - switch(expression) {
     case x:
     // code block
     break;
     case y:
     // code block
     break;
     default:
     // code block
     }

# Loop Statements

1. A while statement repeates its statements as long as a condition evaluates to true.
   while (condition)
   statement
2. The do...while statement repeats until a condition evaluates to false.
   do
   statement
   while (condition);
3. A for loop repeats until a condition evaluates to false.
   for ([initial Expression]; [condition Expression]; [increment Expression])
   statement
4. The for-of statement iterates over values that the iterable object defines to be iterated over. for-of invoke the Symbol.iterator to return an object which implements the Iterator API.
   for (variable of iterable)
   statement
5. The for-in statement iterates over keyed of objects but ignoring ones keyed by Symbols. for-in should not be used to iterate over an Array where the index order is important. There is no guarantee that for-in will return the indexes in any particular order.
   for (variable in object)
   statement
