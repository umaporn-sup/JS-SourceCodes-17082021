//localStorage
let localVisit = localStorage.getItem('localStorageVisit');
if (localVisit === null) {
  localStorage.setItem('localStorageVisit', 1);
} else {
  localStorage.setItem('localStorageVisit', ++localVisit);
}

alert(`visit (local storage): ${localStorage.getItem('localStorageVisit')}`);
localStorage.setItem('bgcolor', 'red');
// localStorage.clear();
// localStorage.removeItem('bgcolor');

//sessionStorage
let sessionVisit = sessionStorage.getItem('sessionStorageVisit');
if (sessionVisit === null) {
  sessionStorage.setItem('sessionStorageVisit', 1);
} else {
  sessionStorage.setItem('sessionStorageVisit', ++sessionVisit);
}
alert(
  `visit (session storage): ${sessionStorage.getItem('sessionStorageVisit')}`
);
