// Chances are we want to create more than one animal.
// Encapsulate this logic inside of a function that we can invoke whenever we need to create a new animal
// This is FUNCTIONAL INSTANTIATION - Uses constructor functions to 'construct' a new object

// FUNCTIONAL INSTANTIATION PATTERN - Using constructor functions
// Capitalize function name for constructors
// function Animal(name, energy) {
//   let animal = {};
//   animal.name = 'Leo';
//   animal.energy = 10;

//   animal.eat = function(amount) {
//     console.log(`${this.name} is eating.`);
//     this.energy += amount;
//   };

//   animal.sleep = function(length) {
//     console.log(`${this.name} is sleeping.`);
//     this.energy += length;
//   };

//   animal.play = function(length) {
//     console.log(`${this.name} is playing.`);
//     this.energy -= length;
//   };
//   return animal;
// }

// const animal1 = Animal('Leo', 7);
// const animal2 = Animal('Snoop', 10);

// animal1.sleep(10);
// console.log(animal1);
// console.log(animal2);

// The constructor function is creating a new object, adds some properties to it, and then returning the object. Note that we are recreating EVERYTHING each time we instantiate a new object.

// Look at the methods. They are generic and not dependent on name or energy arguments. Why should we recreate these methods and waste memory doing so? Why can't we share them?

// FUNCTIONAL INSTANTIATION PATTERN WITH SHARED METHODS - Constructor functions with shared methods
// Create a separate object to contain the methods. Now the methods are only created ONCE in memory. Then we let the constructor REFERENCE our shared methods object
const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  },
  sleep(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  },
  play(length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  }
};

function Animal(name, energy) {
  let animal = {};
  animal.name = 'Leo';
  animal.energy = 10;
  // Referencing our shared methods object. REFERENCING NOT RECREATING!!!
  animal.eat = animalMethods.eat;
  animal.sleep = animalMethods.sleep;
  animal.play = animalMethods.play;

  return animal;
}

const animal1 = Animal('Leo', 7);
const animal2 = Animal('Snoop', 10);

animal1.sleep(10);
console.log(animal1);
console.log(animal2);

// This works, but what if we wanted to add a new method to the shared methods object? Then we will have to go into the constructor function and add in the new method each time.
// Can use Object.Create instead
