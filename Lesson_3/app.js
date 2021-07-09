// for(var i =0; i< 5; i++){
// console.log(i);
// }

// var fruits = ["banana", "orange", "pineapple", "raspberry"];
// var numbers = [1, 3, 5, 7, 9, 7];
// var i = 0;
// while (fruits[i] !== "pineapple") {
//   console.log(fruits[i]);
//   i++;
// }

// i = 0;
// var isEven = false;
// var evenNumber;
//цикл с предусловием
// while (!isEven) {
//   evenNumber = numbers[i];
//   isEven = evenNumber % 2 === 0;
//   i++;
// }
// console.log("Even number is", evenNumber ? evenNumber : "not found");

//цикл с постусловием
// var blacklist = ["ivan", "max", "aidar"];

// var name;
// do {
//   name = prompt("What is your name?");
// } while (name === "" || blacklist.includes(name.toLowerCase()));

// console.log("Welcome", name);

//break continue

// var names = ["eugene", "aidar", "ksenya", "anna", "olya"];

// for (var i = 0; i < names.length; i++) {
//   if (blacklist.includes(names[i].toLowerCase())) {
//     console.warn(`${names[i]} ${i} in blacklist!!!`);
//     break;
//   }

//   console.log(`Welcome, dear guest ${names[i]}`);
// }

//for..of
// for (var name of names) {
//   if (blacklist.includes(name.toLowerCase())) {
//     console.warn(`${name} in blacklist!!!`);
//     break;
//   }

//   console.log(`Welcome, dear guest ${name}`);
// }

// var newWord = "";
// for (const letter of "object") {
//   newWord += letter + "_";
// }
// console.log(newWord);

//Задача на удаление дубликатов из массива
// var array = [1, 2, 2, 1, 4, 5, 3, 3, 3];

//Первое решение
// var distinct = [];
// for (const item of array) {
//   if (distinct.includes(item)) continue;
//   distinct.push(item);
// }
// console.log(distinct);
//Второе решение
// var distinct2 = Array.from(new Set(array));
// console.log(distinct2);

//function declaration - определение функции
function checkHomework(studentName) {
  console.log("Download zip archive of", studentName);
  console.log("Extract zip archive");
  console.log("Open code editor");
  var homeworkNos = Array.from(arguments).splice(1);
  for (const homeworkNo of homeworkNos) {
    console.log("Check homework #" + homeworkNo, "of", studentName);
  }
  var homeWorkIsCorrect = isHwCorrect(studentName);

  if (homeWorkIsCorrect) {
    console.log("Open telegram");
    console.log("Send sticker to", studentName);
    console.log("Open google drive");
    for (const homeworkNo of homeworkNos) {
      console.log("Mark homework #" + homeworkNo + " as done for", studentName);
    }
  } else {
    console.log("Open telegram");
    console.log("Send review notes for", studentName);
  }
}

function isHwCorrect(studentName) {
  var favorites = ["max", "ivan", "ksenya", "olya"];
  return favorites.includes(studentName.toLowerCase());
}

//function expression - функциональное выражение
var printDelimiter = function AnotherName() {
  console.log("-------------------------------");
};

function sum(a, b) {
  return a + b;
}
// console.log(sum(5, 5));

checkHomework("Aizirek", 1, 2, 3, 4, 5);
printDelimiter();
checkHomework("Artem", 1, 2);
printDelimiter();
checkHomework("Olya");
