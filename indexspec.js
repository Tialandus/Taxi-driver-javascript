describe('Car', function () {
  let car;

  // Create a new Car instance before each test
  beforeEach(function () {
    car = new Car();
  });

  // Test to check if the car starts driving
  it('should start driving', function () {
    drive(car);
    expect(car.inDrive).toBe(true);
  });

  // Test to check if the passenger status toggles when speed is 0
  it('should toggle passenger when speed is 0', function () {
    carpool(car);
    expect(car.passenger).toBe('Yes');
    carpool(car);
    expect(car.passenger).toBe('No');
  });

  // Test to check if the passenger status does not toggle when speed is greater than 0
  it('should not toggle passenger when speed is greater than 0', function () {
    car.speed = 10;
    console.log = jest.fn();
    carpool(car);
    expect(console.log).toHaveBeenCalledWith("Passenger/s says, 'I/We are not getting out while you're driving!!!'");
  });

  // Test to check if the car makes a left turn
  it('should make a left turn', function () {
    car.inDrive = true;
    car.speed = 10;
    console.log = jest.fn();
    turnLeft(car);
    expect(console.log).toHaveBeenCalledWith('You have made a left turn!');
  });

  // Test to check if the car makes a right turn
  it('should make a right turn', function () {
    car.inDrive = true;
    car.speed = 10;
    console.log = jest.fn();
    turnRight(car);
    expect(console.log).toHaveBeenCalledWith('You have made a right turn!');
  });

  // Test to check if the car's speed decreases when hitting brakes
  it('should decrease speed when hitting brakes', function () {
    car.inDrive = true;
    car.speed = 10;
    hitBrakes(car);
    expect(car.speed).toBe(5);
  });

  // Test to check if the car's speed increases when pressing gas
  it('should increase speed when pressing gas', function () {
    car.inDrive = true;
    car.speed = 90;
    pressGas(car);
    expect(car.speed).toBe(95);
  });

  // Test to check if the car's speed does not increase beyond 95
  it('should not increase speed beyond 95', function () {
    car.inDrive = true;
    car.speed = 95;
    pressGas(car);
    expect(car.speed).toBe(95);
  });

  // Test to check if the car parks when speed is 0
  it('should park the car', function () {
    car.inDrive = true;
    car.speed = 0;
    parkCar(car);
    expect(car.inDrive).toBe(false);
  });

  // Test to check if the car does not park when speed is greater than 0
  it('should not park the car if speed is greater than 0', function () {
    car.inDrive = true;
    car.speed = 10;
    console.log = jest.fn();
    parkCar(car);
    expect(console.log).toHaveBeenCalledWith("Passenger/s says, 'Are you trying to destroy your car!?!?'");
  });
});

  