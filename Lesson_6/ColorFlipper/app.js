var colorFlipper = document.getElementsByClassName("color-flipper")[0];
var body = document.getElementsByTagName("body")[0];
colorFlipper.onclick = function () {
  var red = convertNumberToHex(randomNumber(0, 255));
  var green = convertNumberToHex(randomNumber(0, 255));
  var blue = convertNumberToHex(randomNumber(0, 255));

  var colorValue = colorFlipper.querySelector("#colorValue");
  var colorV = `#${red}${green}${blue}`;
  colorValue.innerText = colorV;
  body.style.backgroundColor = colorV;
};

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function convertNumberToHex(number) {
  return number.toString(16).toUpperCase().padStart(2, "0");
}
