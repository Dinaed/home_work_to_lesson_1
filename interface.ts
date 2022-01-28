enum Gearbox{
  manual,
  automatic,
  robotic,
  variable
}
interface Cars {
  carName: string,
  model: string,
  color?: string
}

const myCar: Cars = {
  carName: 'Lada',
  model: '2106',
  color:'green'
}

interface CarInShop extends Cars {
  gearbox: string
  carId: number | string,
  readonly price: number
}

const myNewCar: CarInShop = {
  gearbox: Gearbox[1],
  carId: 1,
  carName: 'Volvo',
  model:'S40',
  price: 9500
}