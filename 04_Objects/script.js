let player1 = { id: 1, name: 'Adam' }; //let player1=new Object()
console.log(Object.prototype.isPrototypeOf(player1));

let adminPlayer = Object.create(player1);
adminPlayer.level = 'super';

console.log(`${adminPlayer.id}, ${adminPlayer.name}, ${adminPlayer.level}`);

let playerKeys = Object.keys(player1);
for (let p of playerKeys) {
  console.log(`key: ` + p);
}
class Dice {
  constructor(gameTitle) {
    console.log('constructor is working');
    this._diceName = gameTitle;
    this._faceValue = 0;
  }
  roll() {
    this._faceValue = Math.floor(Math.random() * 6) + 1;
  }
  get faceValue() {
    return this._faceValue;
  }
}
//#1
let dice1 = new Dice();
let dice2 = new Dice();

Dice.prototype.toString = function () {
  return `game = ${this._diceName}, faceValue = ${this._faceValue}`;
};

console.log(dice1.toString());
console.log(dice2.toString());

console.log(Dice.prototype.isPrototypeOf(player1));
