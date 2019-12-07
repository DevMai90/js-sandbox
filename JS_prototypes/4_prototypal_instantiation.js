// Prototypes are properties on a function that points to an object
// Prototype is a property that every function has. Instead of managing a shared method object, we can just add those method to the constructor function's prototype.

// Prototypal Instantiation

// This is not the same as recreating functions for each instance of the object. This is actually added ONTO the constructor function's prototype which will be include in every instantiation

function Animal(name, energy) {
  // Delegate Object.create to Animal.prototype instead of the shared methods object.
  let animal = Object.create(Animal.prototype);
  animal.name = name;
  animal.energy = energy;
  // Returns the actual object
  return animal;
}

Animal.prototype.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

Animal.prototype.sleep = function(length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

Animal.prototype.play = function(length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
};

// Note that we're still not using the 'new' keyword
const animal1 = Animal('Leo', 10);
animal1.eat(5);

// Note that methods with the same name takes precendence over prototype methods
// animal1.eat = function() {
//   console.log('poop');
// };

console.log(animal1);
// console.dir(Object.getPrototypeOf(animal1));

// Prototype is a property that all functions have which points to an object. Allows us to share methods around all instances of a function
// Instead of managing a separate object, we can just use another object that is built into the animal function itself (prototype)

// Recap - How it works under the hood
// 1) We know how to make constructor functions - Constructs an object for us
// 2) How to add methods to the consutructor's prototype
// 3) How to use Object.create to delegate failed lookup to the function's prototype

// Purpose is to share methods across all instances of a particular constructor function
// Review the lines within the constructor function where we use Object.create to pass in the Animal prototype and the return object line. We can do both of these with the new keyword

// PSEUDOCLASSICAL INSTANTIATION - Using the 'new' keyword
function AnimalWithNew(name, energy) {
  // Implicitly ("under the hood") creates an object called this and delegates failed looksup to the function's prototype
  // let this = Object.create(AnimalWithNew.prototype)
  this.name = name;
  this.energy = energy;
  // Implicitly returns the object we made
  // return this;
}

AnimalWithNew.prototype.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

AnimalWithNew.prototype.sleep = function(length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

AnimalWithNew.prototype.play = function(length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
};

// Instantiate with the new keyword
const newAnimal = new AnimalWithNew('Leo', 10);
// console.log(newAnimal);
newAnimal.eat(5);
console.log(newAnimal);

// The new keyword is doing the same thing as before, but is cleaner by using the native 'new' keyword
// We've basically created a 'class' which is a blueprint to make objects. As of ES6, classes are available in JavaScript. It is syntatical sugar, but works the same way under the hood
