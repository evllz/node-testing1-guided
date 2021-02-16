// Build a Car class!
class Car {
  constructor(make, model, odometer) {
    this.make = make;
    this.model = model;
    this.odometer = odometer;
  }
  drive(...leg) {
    const total = leg.reduce((acc, leg) => acc + leg);
    this.odometer += total;
    return total;
  }
  asyncDrive(...leg) {
    const retVal = new Promise((resolve, reject) => {
      const total = leg.reduce((acc, leg) => acc + leg);
      this.odometer += total;
      resolve(total);
    });
    return retVal;
  }
}

module.exports = Car;
