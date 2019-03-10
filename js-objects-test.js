ECMAScript 6 implementation using "class" to match other languages

class Dog {
  constructor(name, breed){
    this.name = name,
    this.breed = breed
  }

  speak(){
    console.log("Woof!");
  }
}

ECMAScript 5 and prior using a constructor

function Cat (name, breed){
  this.name = name,
  this.breed = breed,
  this.speak = function(){
    console.log("Meow");
  }
}

let george = new Dog("George", "Lab");
let georgina = new Cat("Georgina", "Chesire");
console.log(george.name, georgina.name);
george.speak();
georgina.speak();
