// import Animal from "./Models/Animal";
// import Cat from "./Models/Cat";
// import Dog from "./Models/Dog";
// import Person from "./Models/Person";
// import Pet from "./Models/Pet";

import Component from "./Models/Component";

// const animal = new Pet(10);
// console.log(animal);

// animal.lifeDuration = 45;
// console.log(animal.lifeDuration);
// try {
//   animal.lifeDuration = 20;
// } catch (error) {
//   console.warn(error.constructor.name);
// } finally {
//   console.log("Finally");
// }

// const person = new Person("Max", "Ivanov");
// person.fullName = "Ivan Ivanov"; // Error
// console.log(person.fullName);

// const cat = new Cat("Murka", "Vaska");
// const cat2 = new Cat("Murka", "Vaska");
// const cat3 = new Cat("Murka", "Vaska");
// console.log(cat);
// console.log(cat2);
// console.log(cat3);
// console.log(cat.lifeDuration);
// console.log(cat.lifeDurationInfo);

// Cat.getInfo();

// const dog = new Dog("Bethoven", "Mark");
// console.log(dog.lifeDurationInfo);

class Validator {
  static get(type) {
    switch (type) {
      case "phone":
        return function (value) {
          //+996(xxx)xxxxxx
          const regex = /^\+996\(\d{3}\)\d{6}$/;
          return regex.test(value);
        };
      case "inn":
        return function (value) {
          //[012]xxxxxxxxxxx
          return true;
        };
    }
  }
}

const root = document.querySelector("#root");
const components = [];
components.push(Component.render("phone", "Моб.тел."));
components.push(Component.render("inn", "INN"));
root.innerHTML = components.join("");
const phoneValidator = Validator.get("phone");
const innValidator = Validator.get("inn");
const phoneInput = document.getElementById("phoneInput");
const innInput = document.getElementById("innInput");

const phoneValidateBtn = document.getElementById("phoneValidateBtn");
const innValidateBtn = document.getElementById("innValidateBtn");
phoneValidateBtn.addEventListener(
  "click",
  (e) => {
    const span = document.getElementById("phoneValidationMessage");
    span.classList = [];
    if (phoneValidator(phoneInput.value)) {
      span.innerText = "Success";
      span.classList.add("valid");
    } else {
      span.innerText = "Validation error";
      span.classList.add("error");
    }
  },
  false
);
innValidateBtn.addEventListener("click", () => {
  const span = document.getElementById("innValidationMessage");
  span.classList = [];
  if (innValidator(innInput.value)) {
    span.innerText = "Success";
    span.classList.add("valid");
  } else {
    span.innerText = "Validation error";
    span.classList.add("error");
  }
});

Array.prototype.First = function () {
  return this[0];
};
Array.prototype.Last = function () {
  return this[this.length - 1];
};
Array.prototype.map = function () {
  return 0;
};

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.First());
console.log(numbers.Last());
console.log(numbers.map());