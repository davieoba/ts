const carMakers = ['ford', 'toyota', 'lamborghini']

const carType: string[][] = []

carMakers.forEach((el: string): void => {
  carType.push([el])
})

console.log(carType)

// help with higher order functions
const cars = carMakers.map((el: string): string => {
  return el.toUpperCase()
})

// flexible arrays
const importantDates: (Date | string | object)[] = [new Date()]

importantDates.push({ birthday: '29th sept 1997' })