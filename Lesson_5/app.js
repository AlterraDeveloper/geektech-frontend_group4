//High order functions - функции высшего порядка

//ForEach
function myForEach(array, callback) {
  for (const item of array) {
    callback(item);
  }
}

function myMap(array, callback) {
  var newArray = [];
  for (const item of array) {
    var newItem = callback(item);
    newArray.push(newItem);
  }
  return newArray;
}

function myFilter(array, callback) {
  var newArray = [];
  for (const item of array) {
    if (callback(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}

function myReduce(array, callback, initialValue) {
  var result;
  var newArray = array.slice();
  if (arguments.length <= 2) {
    result = newArray.shift();
  } else {
    result = initialValue;
  }
  for (const item of newArray) {
    result = callback(result, item);
  }
  return result;
}

// var numbers = [5, 4, 7];
// numbers.forEach(function (number) {
//   console.log("Standart foreach", number ** 3);
// });
// myForEach(numbers, function (number) {
//   console.log("My foreach", number ** 3);
// });

// var mapNumbers1 = numbers.map(function (number) {
//   return number * 0.5;
// });
// console.log("Original:", numbers);
// console.log("Standart map:", mapNumbers1);

// var mapNumbers2 = myMap(numbers, function (number) {
//   return number * 0.5;
// });
// console.log("Original:", numbers);
// console.log("My map:", mapNumbers2);

// var filterNumbers1 = numbers.filter(function (number) {
//   return !(number % 2 === 0);
// });
// console.log("Original:", numbers);
// console.log("Standart filter:", filterNumbers1);

// var filterNumbers2 = myFilter(numbers, function (number) {
//   return !(number % 2 === 0);
// });
// console.log("Original:", numbers);
// console.log("My filter:", filterNumbers2);

// var reduceNumbers1 = numbers.reduce(function (sum, number) {
//   sum += number;
//   return sum;
// },0);
// console.log("Original:", numbers);
// console.log("Standart reduce:", reduceNumbers1);

// var reduceNumbers2 = myReduce(numbers, function (sum, number) {
//   sum += number;
//   return sum;
// },0);
// console.log("Original:", numbers);
// console.log("My reduce:", reduceNumbers2);

//Closures - замыкания

// function fun() {
//   return function () {};
// }

// var closure = fun();

// console.log(typeof closure);

function addX(x) {
  return function (number) {
    return number + x;
  };
}
var add5 = addX(5);
var add10 = addX(10);

// console.log(add5(0));
// console.log(add5(1));
// console.log(add10(0));
// console.log(add10(1));

function weaponSomeone(someone) {
  return function (weapon) {
    console.log(`${someone} вооружен ${weapon}`);
  };
}

// var weaponGnom = weaponSomeone("Гном");
// var weaponOrk = weaponSomeone("Орк");
// weaponGnom("топором");
// weaponGnom("копьем");
// weaponGnom("кинжалом");
// weaponOrk("кинжалом");
// weaponOrk("дубиной");

//Objects - объекты

var notebook = {
  model: "Vostro",
  vendor: "Dell",
  RAM: 8,
  CPU: "Intel Core i7-11",
};

var notebook2 = Object.create(notebook);
notebook2.model = "Inspiron";

//CRUD - Create,Read,Update,Delete

//Access object properties - доступ к свойствам объекта
// console.log(notebook.vendor);
// console.log(notebook["vendor"]);
// console.log(notebook["CPU info"].freq);

// console.log(notebook.RAM);
//Редактирование свойств объекта
// notebook.RAM = 16;
// notebook["RAM"] = 16;
// console.log(notebook.RAM);

// console.log(notebook.GPU);
// notebook.GPU = "Nvidia GeForce RTX 2060";
// console.log(notebook.GPU);
// notebook.sale = function () {
//   console.log("This notebook is for sale");
// };

//Deleting object property - удаление свойства массива
// delete notebook.GPU;
// delete notebook["CPU info"].L1;
// delete notebook["CPU info"].L2;
// notebook.GPU = undefined; //!!!не надо так делать

var notebooks = [
  // notebook,
  new Laptop("ProBook 4540S", "HP", 8, "Intel Core i5-9", 600),
  new Laptop("Aspire", "Acer", 16, "AMD Ryzen 9000", 700),
  new Laptop("Roq 5", "Asus", 24, "AMD Ryzen 9000", 1000),
  new Laptop("Air", "Macbook", 32, "AMD Ryzen 9000", 1500),
  new Laptop("A67", "Xiaomi", 4, "AMD Ryzen 9000", 500),
  //   {
  //     model: "ProBook 4540S",
  //     vendor: "HP",
  //     RAM: 8,
  //     CPU: "Intel Core i5-9",
  //   },
  //   {
  //     model: "Aspire",
  //     vendor: "Acer",
  //     RAM: 16,
  //     CPU: "AMD Ryzen 9000",
  //   },
];

function Laptop(model, vendor, ram, cpu, price) {
  this.model = model;
  this.vendor = vendor;
  this.CPU = cpu;
  this.RAM = ram;
  this.price = price;
}

//Chaining - цеполка вызовов
var totalPrice = notebooks
  .filter(function (notebook) {
    return notebook.RAM > 16;
  })
  .map(function (notebook) {
    return notebook.price;
  })
  .reduce(function (total, price) {
    total += price;
    return total;
  });
console.log(totalPrice);

var result = [1, 2, 3, 4, 5, 6]
  .filter(function (num) {
    return num % 2 === 0;
  })
  .map(function (num) {
    return num ** 2;
  })
  .reduce(function (sum, num) {
    sum += num;
    return sum;
  });
