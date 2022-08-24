// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDairy() {
  for (let i in dairy) {
    console.log(dairy[i]);
  }
}
// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;
function birdCan() {
  let Keys = Object.keys(bird);
  let values = Object.values(bird);
  for (let i in Keys) {
    console.log(Keys[i], values[i]);
  }
}
// Task 3
function animalCan() {
  birdCan();
  let Keys = Object.keys(bird.__proto__);
  let values = Object.values(bird.__proto__);
  for (let i in Keys) {
    console.log(Keys[i], values[i]);
  }
  for (let i in Object.values(bird.__proto__)) {
    console.log(Object.values(bird.__proto__)[i]);
  }
}
birdCan();
