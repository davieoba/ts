class Vehicle {
  color: string

  constructor(color: string) {
    this.color = color
  }

  // constructor(public color: string) { } this is a shortcut and it is the exact same thing as all the code above
  private nameofvehicle(): void {
    // this method is only accessible within this class and cannot be called as a method on an instance of this class
    console.log(this.color)
  }

  protected honk(): string {
    // this method is available within this class and the subclasses and cannot be called by any instance of this class
    return 'honk honk'
  }

  public drive(): string {
    // this method is available to this class and can be called as a method to an instance of this class
    return 'vroom'
  }

  public printOut() {
    console.log(this.color)
  }
}

const vehicle = new Vehicle('tomato').printOut()

class Car extends Vehicle {
  constructor(color: string) {
    super(color)
  }
  public drive(): string {
    return 'zoom'
  }

  start(): void {
    console.log(`${this.honk()} now`)
  }
}

const car = new Car('orange')
// car.start()
