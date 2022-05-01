import axios from "axios";

const url = `https://jsonplaceholder.typicode.com/todos/1`;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url)
  .then((res) => {
    // console.log(res.data);
    const todo = res.data as Todo;

    const { id, title, completed } = todo;
    logTodo(id, title, completed);
  })
  .catch((err) => console.log(err));

const logTodo = (id: number, title: String, completed: Boolean) => {
  console.log(`
        The id I am working with is: ${id},
        the title is: ${title},
        and is it completed ? ${completed}
    `);
};

let apples: number = 5;

apples = 7;

let speed = 70;
// speed.uppercase();

// type annontations for built in objects
let now: Date = new Date();

// array
let colors: string[] = ["red", "orange", "blue"];

// classes

class Car {}

let car: Car = new Car();

// objects
let person: { age: number; firstName: String } = {
  age: 24,
  firstName: "David",
};

// functions
const logAnswer: (i: number) => void = (i: number) => {
  console.log(i);
};
