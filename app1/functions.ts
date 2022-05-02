const add = (a: number, b: number): string => {
  return a + "a, b";
};

function subtract(a: number, b: number): number {
  return a - b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (a: string, b: string): { firstname: string; lastname: string } => {
  return {
    firstname: a,
    lastname: b,
  };
};

const fullname = logger("David", "Bodunrin");
console.log(fullname);

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date), console.log(weather)
};

logWeather(todaysWeather);
