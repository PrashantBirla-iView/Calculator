function addInputValue(val) {
  let inputElem = document.getElementById("output");
  if (inputElem.value === "0") {
    inputElem.value = "";
  }

  inputElem.value += val;
}

function clearFunc() {
  let outputElem = document.getElementById("output");
  outputElem.value = "";
}

function answer() {
  let inputElem = document.getElementById("output");
  if (inputElem.value == "undefined" || inputElem.value == "") {
    inputElem.value = "0";
  }
  let inputValue = inputElem.value;
  let answer = eval(inputValue);
  inputElem.value = answer;
}
