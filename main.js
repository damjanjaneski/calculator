//make a calculator

let current = document.querySelector("#current");
let currentValue = "";
let result = "";
let realResult;

function clearDisplay() {
  currentValue = "";
  current.innerHTML = currentValue;
  result = "";
}

function number(e) {
  if (currentValue == "" && e.target.innerHTML != "0") {
    currentValue = e.target.innerHTML;
    current.innerHTML = currentValue;
  } else if (currentValue != "" && currentValue.length < 9) {
    currentValue += e.target.innerHTML;
    current.innerHTML = currentValue;
  }
}

function dot() {
  if (!currentValue.includes(".") && currentValue.toString().length < 8) {
    currentValue += ".";
    current.innerHTML = currentValue;
  }
}

function equalTo() {
  if (currentValue == "") {
    return;
  }
  result = eval(result + currentValue);
  if (result.toString().length > 8 && result.toString().includes(".")) {
    result = result.toFixed(3);
    current.innerHTML = result;
  } else {
    current.innerHTML = result;
  }
  currentValue = "";
  console.log(result);
}

function operate(e) {
  if (
    result.toString().slice(-1) == "+" ||
    result.toString().slice(-1) == "-" ||
    result.toString().slice(-1) == "*" ||
    result.toString().slice(-1) == "/"
  ) {
    return;
  }
  current.innerHTML = eval(result + currentValue);
  result += currentValue + e.target.innerHTML;
  currentValue = "";
}

function changeToOpposite() {
  if (currentValue != "") {
    currentValue = -currentValue;
    current.innerHTML = currentValue;
  } else {
    result = -result;
    current.innerHTML = result;
  }
}

function percentage() {
  if (currentValue != "") {
    if (currentValue.toString().length < 9) {
      currentValue /= 100;
      console.log(currentValue);
      current.innerHTML = currentValue;
    } else {
      currentValue /= 100;
      current.innerHTML = currentValue.toString().slice(0, 9);
    }
  } else {
    result /= 100;
    if (result.toString().length < 8) {
      current.innerHTML = result;
    } else {
      current.innerHTML = result.toString().slice(0, 8);
    }
  }
}
