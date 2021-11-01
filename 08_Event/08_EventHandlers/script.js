//1. Event Handler functions
const submitBtn = document.getElementById('submit');
submitBtn.onclick = function submitHandler(event) {
  console.log(
    ` ${event.type}: ${event.target}: ${event.target.id}: ${event.target.value}`
  );
};

// submitBtn.onclick = null;

//2. Adding and Removing Event Handlers
let resetBtn = document.getElementById('reset');
let resetHandler = function (event) {
  console.log(`Event target: ${event.target}`);
  console.log(`Event Type: ${event.type}`);
  const allInputEles = document.querySelectorAll('input');
  allInputEles.forEach((inputEle) => {
    console.log(`Reset empty on ${inputEle.id}`);
    inputEle.value = '';
  });
};
resetBtn.addEventListener('click', resetHandler, false);
//resetBtn.removeEventListener("click", resetHandler, false);

const link = document.getElementById('sitlink');
// link.onclick = function (event) {
//   event.preventDefault();
// };
