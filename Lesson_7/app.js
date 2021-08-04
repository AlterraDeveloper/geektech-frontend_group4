function Laptop(model, vendor, ram, cpu, price, hdd) {
  this.model = model;
  this.vendor = vendor;
  this.CPU = cpu;
  this.RAM = ram;
  this.price = price;
  this.HDD = hdd;
}

var notebooks = [
  new Laptop("ProBook 4540S", "HP", 8, "Intel Core i5-9", 600, 500),
  new Laptop("Aspire", "Acer", 16, "AMD Ryzen 9000", 700, 1000),
  new Laptop("Roq 5", "Asus", 24, "AMD Ryzen 9000", 1000, 2000),
  new Laptop("Air", "Macbook", 32, "AMD Ryzen 9000", 1500, 1200),
  new Laptop("A67", "Xiaomi", 4, "AMD Ryzen 9000", 500, 3000),
  new Laptop("Roq 4", "Asus", 16, "AMD Ryzen 7000", 1000, 2000),
];

//Clojures - замыкания

function makeDiscount(discount) {
  return function (price) {
    return price * (1 - discount / 100);
  };
}

var makeSeasonDiscount = makeDiscount(10);
var makeVipDiscount = makeDiscount(35);
var makeBlackFridayDiscount = makeDiscount(50);

// console.log(makeSeasonDiscount(100));
// console.log(makeVipDiscount(100));
console.log(
  notebooks.map(function (notebook) {
    return notebook.price;
  })
);

var notebooksForVip = notebooks.map(function (notebook) {
  var anotherNotebook = Object.assign({}, notebook);
  anotherNotebook.price = makeVipDiscount(anotherNotebook.price);
  return anotherNotebook.price;
});

console.log(notebooksForVip);

var Friday = 5;
var discountedNotebooks = notebooks.map(function (notebook2) {
  var currentWeekday = new Date(2021, 7, 6).getDay(); //7 - это август
  notebook2.price =
    currentWeekday === Friday
      ? makeBlackFridayDiscount(notebook2.price)
      : makeSeasonDiscount(notebook2.price);
  return notebook2.price;
});

console.log(discountedNotebooks);

//написать такую функцию
//myFunc() -> 1
//myFunc() -> 2
//myFunc() -> 3

function inc() {
  var counter = 0;
  var func = function () {
    console.log(++counter);
  };
  return func;
}

var myFunc = inc();

myFunc(); //1
myFunc(); //2
myFunc(); //3

function getLaptopFilter(prop) {
  return function (filterType) {
    switch (filterType) {
      case "equals":
        var value = arguments[1];
        return function (obj) {
          return obj[prop] === value;
        };
      case "rangeInclusive":
        var rangeStart = arguments[1];
        var rangeEnd = arguments[2];
        return function (obj) {
          return obj[prop] >= rangeStart && obj[prop] <= rangeEnd;
        };
      case "rangeExclusive":
        var rangeStart = arguments[1];
        var rangeEnd = arguments[2];
        return function (obj) {
          return obj[prop] > rangeStart && obj[prop] < rangeEnd;
        };
      default:
        return false;
    }
  };
}

var filterByVendor = getLaptopFilter("vendor");
var filterByRAM = getLaptopFilter("RAM");
var filterByHDD = getLaptopFilter("HDD");

var filterByRamBetween16and32 = filterByRAM("rangeInclusive", 16, 32);

console.log(
  notebooks
    .filter(filterByRAM.apply(null, ["rangeInclusive", 16, 32]))
    .map((notebook) => notebook.RAM)
);
console.log(notebooks.filter(filterByVendor.call(null, "equals", "Asus")));
// console.log(
//   notebooks
//     .filter(function (laptop) {
//       return filterByRAM(laptop, "rangeExclusive", 16, 32);
//     })
//     .map((notebook) => notebook.RAM)
// );
// console.log(
//   notebooks
//     .filter(function (laptop) {
//       return filterByHDD(laptop, "rangeInclusive", 2000, 5000);
//     })
//     .map((notebook) => notebook.HDD)
// );

function Programmer(skill, yearEx) {
  this.skill = skill;
  this.yearEx = yearEx;
  return this;
}

var user = {
  name: "Ivan",
  surname: "Ivanov",
};
//call, bind, apply - методы по изменению контекста this
// var programmerBind = Programmer.bind(user, "JS", 2);
// var programmerApply = Programmer.apply(user, ["JS", 2]);
// var programmerCall = Programmer.call(user, "JS", 2);

// console.log(programmerBind());
// console.log(programmerApply);
// console.log(programmerCall);
// console.log(new Programmer('Python', 10));

var numbers = [1, 15, 8, 3];
console.log(Math.max.apply(null, numbers));

var input1 = document.getElementById("rangeStart");
var input2 = document.getElementById("rangeEnd");
var btnResult = document.getElementById("result");
var textArea = document.getElementById("text");

btnResult.addEventListener("click", function () {
  var rangeStart = input1.value;
  var rangeEnd = input2.value;
  textArea.innerText = JSON.stringify(
    notebooks.filter(
      filterByRAM.apply(null, ["rangeInclusive", rangeStart, rangeEnd])
    ),
    null,
    2
  );
});
