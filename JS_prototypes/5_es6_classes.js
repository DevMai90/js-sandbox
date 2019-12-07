// ES6 - CLASS KEYWORD - USE THIS METHOD

// Instead of adding methods to the prototype, we can add them directly onto the class
// Note, no parantheses
class Animal {
  // constructor creates the object just like our previous constructor function
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  // METHODS STILL GET ADDED TO THE PROTOTYPE
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  }

  sleep(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  }

  play(length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  }
}

// use 'new' keyword
const animal1 = new Animal('Leo', 10);
console.log(animal1);
animal1.play(5);
console.log(animal1);

// Classes allow you to create a blueprint for an object. WHenever you create an INSTANCE of a CLASS, you get an OBJET with the PROPERTIES and METHODS (on prototype) defined in the blueprint
