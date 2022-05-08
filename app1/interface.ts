interface Vehicle {
  name: string;
  year: number,
  broken: boolean | string;
  summary(name: string): string;
  // summary: (name: string) => string;
  // details: (name: string) => string
}

interface Name {
  firstName: string;
  print: (greeting: string) => void;
}

const civic = {
  name: "civic",
  year: 2000,
  broken: false,
  summary(name: string) {
    return `The maker of the car is: ${name}`;
  },
  // details(name: string)
} as Vehicle;

console.log(typeof civic.summary);

function logVehicle(carName: Vehicle): void {
  console.log(carName);

  console.log(`name: ${carName.name}`);
  // console.log(`year: ${year}`)
  // console.log(`broken: ${broken}`)
  // console.log(summary('Honda'))
}

const username = {
  firstName: "David",
  print(greeting: string): void {
    console.log(`${greeting}, ${this.firstName}`);
  },
} as Name;

// console.log(username.print('hello'))

function normal(user: Name): void {
  // console.log(`my name is ${firstName}`)
  // console.log(print())
  user.print("Hello");
}

normal(username);

// logVehicle(civic)
