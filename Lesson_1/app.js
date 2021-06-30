// alert("Hello, Max");
// alert("Hello, Max2");
// alert("Hello, Max3");

//однострочный комментарий
/*
многострочный комментарий
многострочный комментарий
многострочный комментарий
*/
// var userName = prompt("Как вас зовут?", "userName");
// console.log(userName);
// userName = 25
// console.log("Hello,", userName);

//number
// var firstNumber = Number.parseInt(prompt("Enter number 1:"));
// var secondNumber = Number.parseInt(prompt("Enter number 2:"));

// var positiveInfinity = Infinity;
// var negativeInfinity = -Infinity;

// console.log("First num:", firstNumber);

// console.log("Second num:", secondNumber);
// console.log("+", firstNumber + secondNumber);
// console.log("-", firstNumber - secondNumber);
// console.log("*", firstNumber * secondNumber);
// console.log("/", firstNumber / secondNumber);
// console.log("%", firstNumber % secondNumber);
// console.log("**", firstNumber ** secondNumber);

// var nan = NaN;
// console.log("NaN:", nan); //Not a Number

// console.log("isFinite 5", isFinite(5));
// console.log("isFinite Infinity", isFinite(Infinity));
// console.log("isNaN NaN", isNaN(NaN));

//boolean

// var isProgrammer = true;
// var isLead = false;

// //нестрогое сравнение - non strict
// console.log("==", 5 == "5");
// console.log("!=", 5 != "5");
// //строгое стравнение - strict
// console.log("===", 5 === "5");
// console.log("!==", 5 !== "5");
// console.log(">", 5 > 5);
// console.log("<", 5 < 5);
// console.log(">=", 5 >= 5);
// console.log("<=", 5 <= 5);
// console.log("!", !true);

// var name = "Max";
// var age = 65;

// if (age < 0 || age > 150) {
//   console.log("Invalid age");
//   console.log(age);
// } else if (age > 0 && age < 18) {
//   console.log("Hi,", name);
// } else if (age >= 18 && age <= 35) {
//   console.log("Hello,", name);
// } else {
//   console.log("Welcome, dear", name);
// }

// console.log("&&", true && false && true && true);
// console.log("||", false || false || true || false);

//string
var ivan = "Ivan";

//конкатенация
var message = "Hello, " + "\ndear " + ivan;
//интерполяция
var message2 = `Hello, 
dear ${ivan}`;
console.log(message);
console.log(message2);

//escaping - экранирование
var path = "C:\\'Code'\\\"Frontend\"\\Lesson_1";
console.log(path);

var size = "xxl";
switch (size) {
  case "s":
  case "S":
    console.log("Small");
    break;
  case "M":
  case "m":
    console.log("Medium");
    break;
  case "l":
  case "L":
    console.log("Large");
    break;
//   default:
//     console.log("Unknown size");
}
