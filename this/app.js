class NameField {
  constructor(name) {
    const field = document.createElement('li');
    field.textContent = name;
    const nameListHook = document.querySelector('#names');
    nameListHook.appendChild(field);
  }
}

class NameGenerator {
  constructor() {
    const btn = document.querySelector('button');
    // Need names to be available throughout the entire class. Make it available globally.
    // Make a property/field. No longer a variable. It's like a variable attached to the class. Now can be used anywhere in the class and therefore the entire object
    this.names = ['David', 'Max', 'John'];
    this.currentName = 0;
    // Cannot just do addName because there is no addName within the consutructor's context
    // Methods are attached to the object. Not a separate function
    // Tell JS that we want to acccess a function attached to class. Use 'this' keyword
    // 'this' refers to object the code is in
    // We have the () on addName(). The function runs when the script gets parsed by browser. Remove (). Now this function only runs when the event occurs. It becomes a REFERENCE

    // BIND
    // Bind tells JS what 'this' should be referring to in the function that will eventually get executed no matter who actually executes it. Does not immediately get executed.
    // 'this' in the addName method should refer to the current 'this' context within the constructor
    // btn.addEventListener('click', this.addName.bind(this));

    // ANONYMOUS FUNCTION
    // The anonymous function runs when JS is parsed, but the code within it does not run yet
    // Still refers to button. No bueno!
    // btn.addEventListener('click', function() {
    //   this.addName();
    // });

    // ARROW FUNCTION
    // Uses the parent scope's 'this' context
    btn.addEventListener('click', () => {
      this.addName();
    });
  }

  // Methods are attached to the class and therefore attached to the object created
  addName() {
    console.log(this);
    const name = new NameField(this.names[this.currentName]);
    this.currentName++;
    if (this.currentName >= this.names.length) {
      this.currentName = 0;
    }
  }
}

const gen = new NameGenerator();

console.log(gen.names);
