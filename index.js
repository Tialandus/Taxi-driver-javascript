// Car class definition
class Car {
  constructor(inDrive = false, speed = 0, passenger = 'No') {
    this.inDrive = inDrive; // Indicates if the car is in drive mode
    this.speed = speed; // Current speed of the car
    this.passenger = passenger; // Indicates if there is a passenger in the car
  }
}

// Function to start driving the car
function drive(car) {
  if (!car.inDrive && car.speed === 0) {
    car.inDrive = true;
  }
}

// Function to toggle passenger status when the car is not moving
function carpool(car) {
  if (car.speed === 0) {
    car.passenger = car.passenger === 'No' ? 'Yes' : 'No';
  } else {
    console.log("Passenger/s says, 'I/We are not getting out while you're driving!!!'");
  }
}

// Function to make a left turn
function turnLeft(car) {
  if (car.inDrive && car.speed > 0) {
    console.log('You have made a left turn!');
  }
}

// Function to make a right turn
function turnRight(car) {
  if (car.inDrive && car.speed > 0) {
    console.log('You have made a right turn!');
  }
}

// Function to decrease the car's speed
function hitBrakes(car) {
  if (car.inDrive && car.speed > 0) {
    car.speed = Math.max(car.speed - 5, 0);
  }
}

// Function to increase the car's speed
function pressGas(car) {
  if (car.inDrive && car.speed < 100) {
    car.speed = Math.min(car.speed + 5, 100);
  }
}

// Function to park the car
function parkCar(car) {
  if (car.inDrive && car.speed === 0) {
    car.inDrive = false;
  } else {
    console.log("Passenger/s says, 'Are you trying to destroy your car!?!?'");
  }
}
