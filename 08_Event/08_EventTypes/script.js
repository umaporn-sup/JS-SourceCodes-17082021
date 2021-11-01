const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const display = document.getElementById('display_name');
// window.addEventListener('load', (event) => {
//   console.log('Window Loaded!');
// });

window.addEventListener('load', welcomeMessage);
function welcomeMessage(event) {
  alert(`Welcome${event.target}`);
}
window.addEventListener('beforeunload', (event) => {
  display.value = 'Good bye';
  event.returnValue = true;
});

window.addEventListener('resize', (event) => {
  console.log(`${event.target} Resized`);
  console.log(`inner height: ${window.innerHeight}`);
  console.log(`inner width: ${window.innerWidth}`);
});

document.addEventListener('DOMContentLoaded', () => alert('Dom ready!'));

firstName.onblur = function (event) {
  console.log(`${firstName.id}: ${event.target}: on blur!`);
};

lastName.onfocus = function (event) {
  console.log(`${lastName.id}: ${event.target}: on focus!`);
};
// const pdisplay = document.getElementById('pdisplay');

firstName.addEventListener('input', function () {
  display.value = firstName.value;
  // pdisplay.textContent = firstName.value;
});
