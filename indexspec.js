describe('Car', function () {
    let car;
  
    beforeEach(function () {
      car = new Car();
    });
  
    it('should start driving', function () {
      drive(car);
      expect(car.isinDrive).toBe(true);
    });
  
    it('should toggle passenger when speed is 0', function () {
      carpool(car);
      expect(car.passenger).toBe('Yes');
      carpool(car);
      expect(car.passenger).toBe('No');
    });
  
    it('should not toggle passenger when speed is greater than 0', function () {
      car.speed = 10;
      console.log = jest.fn();
      carpool(car);
      expect(console.log).toHaveBeenCalledWith("Passenger/s says, 'I/We are not getting out while you're driving!!!'");
    });
  
    it('should make a left turn', function () {
      car.isinDrive = true;
      car.speed = 10;
      console.log = jest.fn();
      turnLeft(car);
      expect(console.log).toHaveBeenCalledWith('You have made a left turn!');
    });
  
    it('should make a right turn', function () {
      car.isinDrive = true;
      car.speed = 10;
      console.log = jest.fn();
      turnRight(car);
      expect(console.log).toHaveBeenCalledWith('You have made a right turn!');
    });
  
    it('should decrease speed when hitting brakes', function () {
      car.isinDrive = true;
      car.speed = 10;
      hitBrakes(car);
      expect(car.speed).toBe(5);
    });
  
    it('should increase speed when pressing gas', function () {
      car.isinDrive = true;
      car.speed = 90;
      pressedGas(car);
      expect(car.speed).toBe(95);
    });
  
    it('should not increase speed beyond 95', function () {
      car.isinDrive = true;
      car.speed = 95;
      pressedGas(car);
      expect(car.speed).toBe(95);
    });
  
    it('should park the car', function () {
      car.isinDrive = true;
      car.speed = 0;
      parkCar(car);
      expect(car.isinDrive).toBe(false);
    });
  
    it('should not park the car if speed is greater than 0', function () {
      car.isinDrive = true;
      car.speed = 10;
      console.log = jest.fn();
      parkCar(car);
      expect(console.log).toHaveBeenCalledWith("Passenger/s says, 'Are you trying to destroy your car!?!?'");
    });
  });
  