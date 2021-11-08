//Date Objects
//new Date()
//new Date(milliseconds)-JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
//new Date(dateString)
//new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
//YYYY-MM-DDTHH:mm:ss.sssZ

let dateObj1 = new Date(); //with no arguments is current datetime
let dateObj2 = new Date('November 15, 2020 03:24:00'); //with date-string
let dateObj3 = new Date('2020-11-12'); //with date-string
let dateObj4 = new Date('2020-01-17T00:00'); //with date-string
let dateObj5 = new Date(2020, 11, 17, 10, 55, 10); //with date arguments
let dateObj6 = new Date(100000000000); //with milliseconds

// display date objects
console.log(`dateObj1: ${dateObj1}`);
console.log(`dateObj2: ${dateObj2}`); //Sun Nov 15 2020 03:24:00 GMT+0700
console.log(`dateObj3: ${dateObj3}`); //Thu Nov 12 2020 07:00:00 GMT+0700
console.log(`dateObj4: ${dateObj4}`); //Fri Jan 17 2020 00:00:00 GMT+0700
console.log(`dateObj5: ${dateObj5}`); //Thu Dec 17 2020 10:55:10 GMT+0700
console.log(`dateObj6: ${dateObj6}`); //Sat Mar 03 1973 16:46:40 GMT+0700

// into strings using toUTCString() method.
const utcDateObj1 = dateObj1.toUTCString();
const utcDateObj2 = dateObj2.toUTCString();
const utcDateObj3 = dateObj3.toUTCString();
const utcDateObj4 = dateObj4.toUTCString();
const utcDateObj5 = dateObj5.toUTCString();
const utcDateObj6 = dateObj6.toUTCString();

//display UTC date
console.log(`utcDateObj1: ${utcDateObj1}`);
console.log(`utcDateObj2: ${utcDateObj2}`); //Sat, 14 Nov 2020 20:24:00 GMT
console.log(`utcDateObj3: ${utcDateObj3}`); //Thu, 12 Nov 2020 00:00:00 GMT
console.log(`utcDateObj4: ${utcDateObj4}`); //Thu, 16 Jan 2020 17:00:00 GMT
console.log(`utcDateObj5: ${utcDateObj5}`); //Thu, 17 Dec 2020 03:55:10 GMT
console.log(`utcDateObj6: ${utcDateObj6}`); //Sat, 03 Mar 1973 09:46:40 GMT

//Date(0)
let resetDate = new Date(0); //Thu Jan 01 1970 07:00:00 GMT+0700
console.log(`Date(0): ${resetDate}`);
