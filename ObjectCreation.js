// Method 1
// Object constructor

var emp = {
};

// Method 2
// By using fuction incase of repetation

var bicycle1 = createBicycle (50,100,200);
var bicycle2 = createBicycle (5,10,20);

function createBicycle(speed, cadence, gear) {
  var newBicycle = {};
  newBicycle.speed = speed;
  newBicycle.cadence = cadence;
  newBicycle.gear = gear;
  return newBicycle;
}

// Method 3
// function constructor - javascritp short cut to create objects

var bicycle3 = new Bicycle(10,20,30);

function Bicycle(speed, cadence, gear) {
  //var this;  no need to create this as it JS will create automatically
  newBicycle.speed = speed;
  newBicycle.cadence = cadence;
  newBicycle.gear = gear;
  // return this; no need to return in case of function custructor
}
