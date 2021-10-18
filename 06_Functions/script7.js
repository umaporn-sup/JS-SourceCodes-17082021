//non-pure function
let extra = 2;
function f(n) {
  return n * extra;
}
console.log(f(10));
extra = 3;
console.log(f(10));
