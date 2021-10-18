// import * as lib from './dataFuncExport.js';
// import { subject as course } from './subjectExport.js';
// console.log(course);
// console.log(`Frontend Framework: ${lib.frontEndFramework}`);
// console.log(lib.greeting());

import defaultExport, {
  greeting,
  frontEndFramework as frontEnd
} from './dataFuncExport.js';
import { subject } from './subjectExport.js';
console.log(`Frontend Framework: ${frontEnd}`);
console.log(greeting());
console.log(defaultExport);

console.log(subject);
