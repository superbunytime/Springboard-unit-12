class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep.";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

let myVeh = new Vehicle("Dog", "Daschund", "Odie");

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }
  numWheels = 4;
}

let myCar = new Car("Cat", "Orange??", "Garfield");

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }
  numWheels = 2;
  revEngine() {
    return "VROOM!!!";
  }
}

let myBike = new Motorcycle("Person", "This bit is stale", "don't say Jon");

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }

  add(v) {
    if (!(v instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }
    this.vehicles.push(v);
    return "Vehicle added!";
  }
}

let myGar = new Garage(2);

myGar.add(myBike);
myGar.add(myVeh);
myGar.add(myCar);