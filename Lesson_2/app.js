//undefined

console.log(username);

var username;
var text = ""; //string
var chislo = 5; //number
var logicheskoe = true; //boolean

//function
var prepareToWork = function (name) {
  console.log("I'm", name, "and i prepare for work...");
  console.log("1) Wake up");
  console.log("2) Clean teeth");
  console.log("3) Have a breakfast");
  console.log("4) Come out from home");
};
// prepareToWork("Eugene");
// prepareToWork("Artem");
// prepareToWork("Max");
// prepareToWork("Ivan");

//object
var user = {
  name: "Max",
  surname: "Grom",
  age: 30,
  isMarried: false,
  technologies: undefined,
  sayHello: function () {
    console.log("Hello everyone!!");
  },
};

// var laptop = {
//   vendor: "asus",
//   model: "roq 5",
//   RAM: "16 GB",
//   CPU: {
//     vendor: "Intel",
//     model: "i5",
//     generation: 10,
//     L1: "5 Mb",
//   },
//   turnOn: function () {
//     console.log("Laptop is working...");
//   },
//   turnOff: function () {
//     console.log("Laptop is shutting down...");
//   },
// };

// console.log(laptop.vendor, laptop.model, laptop.CPU.vendor, laptop.CPU.model+"-"+laptop.CPU.generation);
// laptop.turnOn()
// laptop = {}
// laptop.turnOff()

// var emptyObject = null;

// console.log(typeof text);
// console.log(typeof chislo);
// console.log(typeof logicheskoe);
// console.log(typeof username);
// console.log(typeof prepareToWork);
// console.log(typeof user);

//унарные
// console.log(!true); // !
// console.log(-5); // -
// chislo = chislo + 1 -> chislo += 1 -> chislo++
// console.log(chislo++);
// console.log(++chislo);
// console.log(--chislo);
// console.log(chislo--);
//бинарные
// + - * / % ** > < >= <= == === != !==
//тернарный
var playerColor = "black";
if (playerColor === "white") {
  console.log("You start...");
} else {
  console.log("Wait your enemy...");
}
console.log(playerColor === "white" ? "You start..." : "Wait your enemy...");

var ownerID = 111111;
var clientID = 0;
console.log("Cell extend by", clientID ? clientID : ownerID);
var isReady = NaN;
console.log(isReady ? "Yes" : "No");

//truthy and falsy
//falsy: false 0 NaN "" '' `` undefined null -> false

//Array
var numbers = [1, 2, 4, 3, 5, 6, 7, 8, 9];
var others = [
  true,
  {},
  null,
  undefined,
  "Max",
  48,
  { login: "", password: "" },
];

//                0         1           2           3
var fruits = ["banana", "orange", "pineapple", "raspberry"];
console.log(fruits[0]); // первый элемент в коллекции
console.log(fruits[fruits.length - 1]); //последний элемент в коллекции

// var firstFruit = fruits.shift();
// var lastFruit = fruits.pop();
// fruits.push("apple", "cherry", "strawberry");
// var fruit = fruits.unshift("apple1", "cherry1", "strawberry1");
// var deletedFruits = fruits.splice(fruits.length - 3);

//           012345
console.log("Qwerty"[10]);

// задачка из яндекса
var htmlTags = ["li", "div", "span", "div", "span", "h3", "a", "div", "a"];
var htmlTagsCounter = {};

for (var i = 0; i < htmlTags.length; i++) {
  var currentTag = htmlTags[i];
  if (htmlTagsCounter.hasOwnProperty(currentTag)) {
    htmlTagsCounter[currentTag] += 1;
  } else {
    htmlTagsCounter[currentTag] = 1;
  }
}
console.log(htmlTagsCounter);
console.log(
  Object.keys(htmlTagsCounter).sort(function (tag1, tag2) {
    return htmlTagsCounter[tag2] - htmlTagsCounter[tag1];
  })
);

for (var i = 0; i < 10; i+=5) {
  console.log(i);
//   console.log(i ** 2);
}
