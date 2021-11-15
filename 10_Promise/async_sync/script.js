// 1. synchronous
console.log(`hello `);
console.log('world, ');
console.log('bye');

//2. asynchronous
// console.log(`hello `);
// setTimeout(() => console.log('world, '), 3000);
// console.log('bye');

//2.1 asynchronous (using promise then() method)

// console.log(`hello `);
// const wait = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('world');
//   }, 2000);
// });

// wait.then((data) => {
//   console.log(data);
//   console.log('bye');
// });

//2.2 asynchronous (using async/await)

// console.log(`hello `);

// async function delay() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('world');
//     }, 2000);
//   });
// }

// async function getWord() {
//   const data = await delay();
//   console.log(data);
//   console.log('bye');
// }

// getWord();
