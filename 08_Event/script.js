//1. query target node
const okBtn = document.querySelector('#submitOK');
const divBtn = document.querySelector('#divButtonPanel');

//2. register event handler to target node
okBtn.addEventListener('click', showMessage);
divBtn.addEventListener('click', (e) => {
  alert(`div click!!
    event target: ${e.target}
    event current target: ${e.currentTarget}
    event phase: ${e.eventPhase}
    event type: ${e.type}`);
});

// okBtn.onclick = null;
//3. prepare event handler
function showMessage(e) {
  alert(`submit button click!!
    event target id : ${e.target.id}
    event current target: ${e.currentTarget}
    event phase: ${e.eventPhase}
    event type: ${e.type}`);
}

// const cancelBtn = document.querySelector('#C001');
// //1. binding with event function name
// // cancelBtn.onclick = showMessage;

// // function showMessage() {
// //   alert('you click on cancel button now!');
// // }

// // //2. binding with event function expression
// // cancelBtn.onclick = function (event) {
// //   alert(`you click on cancel button now!: ${event.target.id}`);
// // };

// const okBtn = document.querySelector('#submitOK');
// okBtn.addEventListener('click', addProduct, true);
// // okBtn.removeEventListener('click', addProduct);
// function addProduct(event) {
//   alert(`event target: ${event.target}
//         event current target : ${event.currentTarget}
//         event target id: ${event.target.id}
//         event phase: ${event.eventPhase}
//         event type: ${event.type}`);
// }

// const divBtnPanel = document.querySelector('#divButtonPanel');
// divBtnPanel.addEventListener(
//   'click',
//   (event) => {
//     alert(`click on div panel was fired!,
//   event target: ${event.target}
//     event current target : ${event.currentTarget}
//         event target id: ${event.target.id}
//         event phase: ${event.eventPhase}
//         event type: ${event.type}`);
//   },
//   true
// );

// const formEle = document.querySelector('#userForm');

// formEle.addEventListener('click', writeSomething, true);
// function writeSomething(event) {
//   // console.log(event.target);
//   // console.log(event.target.id);
//   console.log(event.type);
//   console.log(event.currentTarget);
//   console.log(event.eventPhase);
//   console.log('Hello World');
// }

// const divFormEle = document.getElementById('userDivForm');
// //on the fly
// divFormEle.addEventListener(
//   'click',
//   (event) => {
//     // console.log(event.target);
//     // console.log(event.target.id);
//     console.log(event.type);
//     console.log(event.currentTarget);
//     console.log(event.eventPhase);
//   },
//   true
// );
