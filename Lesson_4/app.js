function checkHomework(studentName) {
  var homeworkNos = Array.from(arguments).splice(1);
  if (homeworkNos.length > 1) {
    for (const no of homeworkNos) {
      checkHomework(studentName, no);
    }
  }
  var homeWorkNo = homeworkNos[0];
  console.log(`HOMEWORK ${homeWorkNo}`);
  console.log("Download zip archive of", studentName);
  console.log("Extract zip archive");
  console.log("Open code editor");
  var homeWorkIsCorrect = isHwCorrect(studentName);

  if (homeWorkIsCorrect) {
    console.log("Open telegram");
    console.log("Send sticker to", studentName);
    console.log("Open google drive");
  } else {
    console.log("Open telegram");
    console.log("Send review notes for", studentName);
  }
  console.log("---------------------------------------");
}

function isHwCorrect(studentName) {
  var favorites = ["max", "ivan", "ksenya", "olya"];
  return favorites.includes(studentName.toLowerCase());
}

// checkHomework("Ivan", 1, 2, 3);

// for (var i = 0; i < 5; i++) {
//   console.log(i + 1);
// }

//Рекурсия
function forLoop(num) {
  if (num > 5) return; //!!! Условие выхода из рекурсии !!!
  console.log(num);
  forLoop(num + 1); //Рекурсивный вызов
}

// forLoop(1);

//1 1 2 3 5 8 13

function fibLoop(num) {
  var array = [1, 1];
  if (num < 3) return array.slice(0, num);
  for (let i = 0; i < num - 2; i++) {
    array.push(array[i] + array[i + 1]);
  }
  return array;
}

// console.log(fibLoop(1)); // 1
// console.log(fibLoop(2)); // 1 1
// console.log(fibLoop(3)); // 1 1 2
// console.log(fibLoop(4)); // 1 1 2 3
// console.log(fibLoop(7)); //1 1 2 3 5 8 13

function fibRecurse(num) {
  if (num < 3) return 1;
  return fibRecurse(num - 1) + fibRecurse(num - 2);
}

// console.log(fibRecurse(1));
// console.log(fibRecurse(2));
// console.log(fibRecurse(3));
// console.log(fibRecurse(7));

function callBackExample(func) {
  func();
}

// callBackExample(function () {
//   console.log("I'm callback!");
// });

// callBackExample(function () {
//   var sum = 0;
//   sum = 5 + 25;
//   console.log("5 + 25 =", sum);
// });

function capitalization(text, index, array) {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

var fruits = ["banana", "orange", "pineapple", "raspberry"];

//map, filter, reduce

//map - проекция, отображение (преобразует КАЖДЫЙ элемент в коллекции)
var newFruits = fruits.map(capitalization);
console.log("fruits", fruits);
console.log("new fruits", newFruits);

var numbers = ["555112233", "0700111222", "0555 11-45-58"];

var kgNumbers = numbers.map(function (number) {
  //   number = number.replace(/[0]{1}/, "");
  return "+996 " + number;
});

console.log("numbers", numbers);
console.log("KG numbers", kgNumbers);

//filter - фильтрует данные исходя из результата функции

var shortFruits = fruits.filter(function (fruit) {
  return fruit.length < 7;
});

console.log("fruits", fruits);
console.log("shortFruits", shortFruits);

var correctKgNumbers = numbers.filter(function (number) {
  return number.startsWith("0");
});

console.log("numbers", numbers);
console.log("correct KG numbers", correctKgNumbers);

//reduce - получение результата из массива

var figures = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var numSum = figures.reduce(function (sum, num) {
  sum += num;
  return sum;
}, 0);

console.log("numbers avg =", numSum / figures.length);

console.log(
  fruits.reduce(function (text, fruit) {
    text += ", " + fruit;
    return text;
  })
);

console.log(fruits.toString()); 
