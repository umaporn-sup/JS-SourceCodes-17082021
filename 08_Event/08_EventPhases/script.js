//1. add event on all elements
// for (let e of document.querySelectorAll('*')) {
//   //Capture
//   e.addEventListener(
//     'click',
//     (event) =>
//       alert(`
//         Capture
//           1. Capturing: ${e.tagName},
//           2. current target: ${event.currentTarget},
//           3. target: ${event.target},
//           4. event phase: ${event.eventPhase}`),

//     true
//   );
//   //Bubble
//   e.addEventListener(
//     'click',
//     (event) =>
//       alert(`
//         Bubble
//           1. Capturing: ${e.tagName},
//           2. current target: ${event.currentTarget},
//           3. target: ${event.target},
//           4. event phase: ${event.eventPhase}`),

//     false
//   );
// }

// const p = document.getElementById('p1');
// p.addEventListener('mouseover', (event) => {
//   event.target.style.backgroundColor = 'red';
// });

// p.addEventListener('mouseout', (event) => {
//   event.target.style.backgroundColor = 'green';
// });

//2. add event only two elements: <p> and <div>
const p = document.getElementById('p1');
p.addEventListener('click', (event) => {
  alert(event.currentTarget), alert(event.eventPhase);
});
p.addEventListener(
  'click',
  (event) => {
    alert(event.currentTarget), alert(event.eventPhase);
  },
  true
);
const d = document.getElementById('d1');
d.addEventListener('click', (event) => {
  alert(event.currentTarget), alert(event.eventPhase);
});
d.addEventListener(
  'click',
  (event) => {
    alert(event.currentTarget), alert(event.eventPhase);
  },
  true
);
