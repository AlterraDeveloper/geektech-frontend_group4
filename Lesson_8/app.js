// ES6 - ECMAScript 2016

//let, const

// var _var;
//Hoisting - всплытие
// console.log("Variable: ", _var);
// console.log("Variable 2: ", _let); //error
// console.log("Variable 3: ", _const); //error

// _var = 5;

// let _let = 5;
// const _const = 5;

// _let = "qwerty";
// console.log("Let = ", _let);

// _const = "qwerty"; //error
// console.log("Const = ", _const);

// const constObject = {
//   size: "XXL",
//   color: "red",
//   price: 150,
// };

// constObject.price = 1000;
// constObject.color = 'black';
// constObject.brand = "lacoste"

// console.log("My const object", constObject);

// console.log(this);

// let inc = 5;
// var inc = 5;
// for (let i = 0; i < 5; i++) {
//   console.log(i + inc);
// }
// console.log("i = ", i);
// console.log("inc = ", inc);

//Arrow functions - Стрелочные функции

const numbers = [1, 2, 3, 4, 5];

const squaresEs5 = function (number) {
  return number ** 2;
};
const squares = (number) => number ** 2;
console.log(numbers.map(squares));
console.log(numbers.map(squaresEs5));

function Laptop(model, vendor, ram, cpu, price) {
  this.model = model;
  this.vendor = vendor;
  this.CPU = cpu;
  this.RAM = ram;
  this.price = price;
}

var notebooks = [
  new Laptop("ProBook 4540S", "HP", 8, "Intel Core i5-9", 600),
  new Laptop("Aspire", "Acer", 16, "AMD Ryzen 9000", 700),
  new Laptop("Roq 5", "Asus", 24, "AMD Ryzen 9000", 1000),
  new Laptop("Air", "Macbook", 32, "AMD Ryzen 9000", 1500),
  new Laptop("A67", "Xiaomi", 4, "AMD Ryzen 9000", 500),
];

// console.log(notebooks.map((notebook) => `${notebook.RAM} Gb`));
// console.log(
//   notebooks
//     .filter((notebook) => notebook.RAM > 16)
//     .map((notebook) => notebook.vendor)
// );
const user = {
  login: "Qwerty",
  password: "123",
  signIn: function () {
    console.log(`User ${this.login} is signed in...`); //Template Strings - Шаблонные строки
  },
  signOut: () => {
    console.log(`User ${this.login} is signed out...`); //Template Strings - Шаблонные строки
  },
  thisDetector: () => {
    console.log(this);
  },
};
// user.thisDetector()
// user.signIn()
// user.signOut();

const carWheelsCount = () => 4;

//Default arguments - Параметры по умолчанию
function Car(model, price, wheels = carWheelsCount()) {
  this.model = model;
  this.price = price;
  this.wheels = wheels;
}

// console.log(new Car("toyota", 5000));
// console.log(new Car("Volvo", 25000, 12));

//spread rest

//Rest operator

function avgEs5() {
  let sum = 0;
  const takeN = arguments[0];
  const elememts = Array.from(arguments).slice(1, takeN + 1);
  for (let i = 0; i < elememts.length; i++) {
    const element = elememts[i];
    sum += element;
  }
  return sum === 0 ? sum : sum / elememts.length;
}

function avgEs6(takeN, ...numbers) {
  let sum = 0;
  numbers = numbers.slice(0, takeN - 1);
  for (const number of numbers) {
    sum += number;
  }
  return sum === 0 ? sum : sum / numbers.length;
}

function avgWithFilter(filterFn, ...numbers) {
  let sum = 0;
  numbers = numbers.filter(filterFn);
  for (const number of numbers) {
    sum += number;
  }
  return sum === 0 ? sum : sum / numbers.length;
}

console.log(avgEs5(3, 4, 2, 3, 5));
console.log(avgEs6(3, 4, 2, 3, 5));
console.log(avgWithFilter((num) => num > 5, 3, 4, 2, 3, 5, 6));
// console.log(avg(1,2,3));
// console.log(avg(5,8,17,1,7,2));
// console.log(avg());

//Spread operator - деструктуризация

const fruits = ["banana", "orange", "pineapple", "raspberry"];

const [fruit1, orange, , fruit4] = [...fruits];
console.log(fruit1);
console.log(fruit4);
console.log(orange);
console.log(fruits);

const { model: carModel, price: carPrice } = { ...new Car("Toyota", 5000) };

console.log(carModel);
console.log(carPrice);

const nums = [1, 5000, 4, 7, 8, 12];
console.log("Max = ", Math.max(...nums));
console.log("Max = ", Math.max.apply(null, nums));

let Pricelist = {
  Shoes: 5000,
  Shirts: 200,
  Jacket: 25000,
  Hats: 50,
  Pants: 3700,
};

let response = {
  Shoes: 7000,
  Jacket: 17000,
  Hats: 100,
  Scirt: 150,
};

console.log(Pricelist);

// for (const key in response) {
//   if (Object.hasOwnProperty.call(response, key)) {
//     // if (Pricelist[key]) {
//     Pricelist[key] = response[key];
//     // }
//   }
// }

//Merge objects
Pricelist = { ...Pricelist, ...response };

console.log(Pricelist);

// Classes

class CarClass {
  constructor(model, price, wheels = 4) {
    console.log("I'm constructor!");
    this.model = model;
    this.price = price;
    this.wheels = wheels;
  }
}

new CarClass("Nissan", 10000);
