function showValue(e) {
  document.getElementById("displayKalkulator").value += e;
}

function delet() {
  document.getElementById("displayKalkulator").value = "";
}

function calculate() {
  try {
    var result = eval(document.getElementById("displayKalkulator").value);
    document.getElementById("displayKalkulator").value = result;
  } catch (error) {
    document.getElementById("displayKalkulator").value = "Error!!";
  }
}
