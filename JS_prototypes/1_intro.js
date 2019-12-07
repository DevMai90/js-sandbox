// Object Literals
let animal = {};
animal.name = 'Leo';
animal.energy = 10;

animal.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

animal.sleep = function(length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

animal.play = function(length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
};

animal.play(1);
console.log(animal);

// Chances are we want to create more than one animal.
// Encapsulate this logic inside of a function that we can invoke whenever we need to create a new animal
// This is FUNCTIONAL INSTANTIATION - Uses contructor functions to 'construct' a new object
