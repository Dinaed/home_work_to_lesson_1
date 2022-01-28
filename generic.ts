class OneMoreCar<T extends number | string, K> {
  constructor(protected carMileage: T, public carModel: K) {
  }
  printCar() {
      console.log(`${this.carMileage} - car mileage, ${this.carModel} - car model`);
  }
}

const moskvich = new OneMoreCar(150000, '2141');
moskvich.printCar();
const ford = new OneMoreCar('many miles', 'Skorpio');
ford.printCar();