/* "abandon hope all ye who enter here" */
function convert() {
    let temp = document.getElementById("input").value;
    let result = (temp * 1.8 + 32);
    let output = document.getElementById("result");
    output.outerHTML = result;
  }