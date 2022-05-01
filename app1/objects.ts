const profile = {
  firstname: 'David',
  age: 24,
  coords: {
    lat: 2,
    long: 23
  },
  setAge(age: number): void {
    this.age = age
  }
}

const { age }: { age: number } = profile

const { coords: { lat, long } }: { coords: { lat: number; long: number } } = profile

console.log(lat, long)