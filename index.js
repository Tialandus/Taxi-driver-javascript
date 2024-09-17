class Car {
    constructor(isinDrive = false, speed = 0, passenger = 'No') {
      this.isinDrive = isinDrive;
      this.speed = speed;
      this.passenger = passenger;
    }
  }
  
  function drive(car) {
    if (!car.isinDrive && car.speed === 0) {
      car.isinDrive = true;
    }
  }
  
  function carpool(car) {
    if (car.speed === 0) {
      if (car.passenger === 'No') {
        car.passenger = 'Yes';
      } else if (car.passenger === 'Yes') {
        car.passenger = 'No';
      }
    } else {
      console.log("Passenger/s says, 'I/We are not getting out while you're driving!!!'");
    }
  }
  
  function turnLeft(car) {
    if (car.isinDrive && car.speed > 0) {
      console.log('You have made a left turn!');
    }
  }
  
  function turnRight(car) {
    if (car.isinDrive && car.speed > 0) {
      console.log('You have made a right turn!');
    }
  }
  
  function hitBrakes(car) {
    if (car.isinDrive && car.speed > 0) {
      car.speed -= 5;
    }
  }
  
  function pressedGas(car) {
    if (car.isinDrive && car.speed < 95) {
      car.speed += 5;
    }
  }
  
  function parkCar(car) {
    if (car.isinDrive && car.speed === 0) {
      car.isinDrive = false;
    } else {
      console.log("Passenger/s says, 'Are you trying to destroy your car!?!?'");
    }
  }
  