// import { Pet } from "./Models/Animal";
// import Animal from "./Models/Animal";
import Animal from "./Models/Animal";
import Pet from "./Models/Pet";
import Cat from "./Models/Cat";

// const projectSettings = {
//   name: "lesson_9",
//   version: "1.0.0",
//   description: "",
//   main: "app.js",
// };

//Сериализация
// const json = JSON.stringify(projectSettings, null, 2);

// console.log(json);

// const projectJson = `
// {
//     "name": "lesson_9",
//     "version": "1.0.0",
//     "description": "",
//     "main": "app.js",
//     "scripts": {
//       "test": "echo \\"Error: no test specified\\" && exit 1"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC"
//   }
// `;
//Парсинг или десериализация
// const packageJson = JSON.parse(projectJson);

// console.log(packageJson);
const wildAnimal = new Animal();
const pet = new Pet("Burenka", "Dashka");
const cat = new Cat("Murka", "Mashka");
wildAnimal.makeVoice();
pet.makeVoice();
cat.makeVoice();
// console.log(cat.toString());
// console.log(window.toString());
// console.log(cat.hasOwnProperty("makeVoice"));
// console.log(cat.hasOwnProperty("owner"));

console.log(pet instanceof Animal);

//ООП - Объектно-ориентрированнное програмирование
