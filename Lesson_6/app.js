//DOM Manipulations - Манипуляция с DOM

//DOM - Document object model

// console.log(document); //Window
// console.log(this.document); //Window

// 127.0.0.1 - localhost
// 0.0.0.0 - 255.255.255.255

//V8
//Кроссплатформенность
//Кроссбраузерность

//Get elements

// var button = document.getElementById("button");
var button = document.querySelector("#button");

button.style.width = "200px";

var counter = 0;
button.addEventListener("click", function (event) {
  //   event.screenX > 320 ? counter++ : counter--;
  //   textP.innerText = counter;

  //Create and add element

  var li = document.createElement("li");
  li.innerText = ++counter;
  list.appendChild(li);
});

var textP = document.querySelector(".text");
console.log(textP);
textP.innerHTML = "Hello DOM";

var list = document.querySelector(".list");

var input = document.getElementById("nameInput");

input.setAttribute("placeholder", "enter someone name");

input.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.innerText = e.target.value;
    span.style.margin = "0 25px";
    var btn = document.createElement("button");
    btn.innerText = "✘";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.onclick = function (e) {
      // Removing element
      // e.target.parentElement.style.display = "none";
      e.target.parentElement.remove();
    };
    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);
    e.target.value = "";
  }
});
