/// <reference path="app.ts" />
// tsc --outFile class.js class.ts app.ts для запуска компилятора
interface ICars {
  weight: number;
  bodyType: string;
  color: string;
}

class Car {
  private serialNumber: number;
  public interiorTrim:string;
  public carName:string;

  setSerialNumber(num:number){
    this.serialNumber = num;
  }
  getSerialNumber(){
    return this.serialNumber;
  }
}

class NewCar extends Car implements ICars {
  weight: number;
  public bodyType: string;
  public color: string;
  
  setCarName(name:string): void{
    this.carName = name;
  }
  
  setWeight(weight: number): void{
    this.weight = weight;
  }

  setBodyType(bodyType: string): void {
    this.bodyType = bodyType;
  }
  
  setColor(color:string): void{
    this.color = color;
  }

  printCar():void{
    console.log(`Car name - ${this.carName},
car weight - ${this.weight} kg,
car body type - ${this.bodyType},
car color - ${this.color},`
//car serian number - ${this.serialNumber} - do not working 
    );
  }
}

class CarMileage extends Car{
  fuel: number;
  speed: number;
  consumption: number = 10;
  distance: number = 100;

  setCarConsumption(distance:number, fuel:number) {
    this.consumption = (fuel/distance)*100;
  }

  getCarConsumption() {
    return this.consumption;
  }
  setDistance(fuel:number, consumption: number){
    return this.distance = fuel * consumption;
  }
  getDistance(){
    return this.distance;
  }
  constructor(carFuel: number, carSpeed: number, carDistance: number){
    super();
    this.fuel = carFuel;
    this.speed = carSpeed;
    this.distance = carDistance;
  }
}

const testCar: CarMileage = new CarMileage(20, 65, 270);
testCar.setCarConsumption(testCar.distance, testCar.fuel);
console.log(`Car consumption is: ${testCar.getCarConsumption().toFixed(2)} on 100 km`);
testCar.setDistance(testCar.fuel, testCar.consumption);
console.log(`Max car distance is: ${testCar.getDistance().toFixed(2)} km`);



class AnotherCar extends Car {
  carModel:string
  constructor(model:string){
    super();
    this.carModel = model;
  }
  getCarModel(){
    console.log(this.carModel);
    
  }
}


const nissan: NewCar = new NewCar;
nissan.setCarName('Nissan');
nissan.setBodyType('Sedan');
nissan.setColor('red');
nissan.setWeight(1500);
nissan.setSerialNumber(22300005556777);
nissan.printCar();
console.log(nissan.getSerialNumber());

const kia : AnotherCar = new AnotherCar('Kia');
kia.getCarModel();

const audi = new Drive.Cars('Audi');
console.log(audi.name);
const suzuki = new Drive.Motorbike('Suzuki');
console.log(suzuki.name);