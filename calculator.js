let checkBox = document.getElementById("checkbox");
function change() {
  if (checkBox.checked == true) {
    color = "green";
  } else {
    color = "white";
  }

  document.body.style.backgroundColor = color;
}
//the string that appears

const firstHalf = [];
let text = "";

function numbers(value) {
  text += value;
  document.getElementById("solution").innerHTML = text;
  firstHalf.push(text);
}

function answer() {
  let lastItem = firstHalf.findLast((x) => (x = firstHalf.length));
  document.getElementById("solution").innerHTML = eval(lastItem);
  text = eval(lastItem);
}

function clearField() {
  document.getElementById("solution").innerHTML = 0;
  text = "";
}

document.onkeydown = function (e) {
  if (e.key in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
    numbers(e.key);
  }

  if (e.key == "+") {
    numbers("+");
  }

  if (e.key == "-") {
    numbers("-");
  }

  if (e.key == "*") {
    numbers("*");
  }

  if (e.key == "/") {
    numbers("/");
  }

  if (e.key == ".") {
    numbers(".");
  }

  if (e.key == "Enter") {
    answer();
  }
};
