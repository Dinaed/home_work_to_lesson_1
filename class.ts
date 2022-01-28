/// <reference path="app.ts" />

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

const kia : AnotherCar = new AnotherCar('Kia');
kia.getCarModel();

const audi = new Drive.Cars('Audi');
console.log(audi.name);
const suzuki = new Drive.Motorbike('Suzuki');
console.log(suzuki.name);