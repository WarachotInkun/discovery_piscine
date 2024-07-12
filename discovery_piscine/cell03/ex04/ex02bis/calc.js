function showResult() {
  let leftOperand = $("#leftInput").val();
  let operator = $("#operator").val();
  let rightOperand = $("#rightInput").val();

  // Check if the inputs are valid numbers using strict regular expressions
  const isValidNumber = (input) => /^-?(0|[1-9]\d*)(\.\d+)?$/.test(input);

  if (!isValidNumber(leftOperand.trim()) || !isValidNumber(rightOperand.trim()) || leftOperand.trim() === "" || rightOperand.trim() === "") {
      alert("Error: Invalid input.");
      return;
  }

  leftOperand = parseInt(leftOperand);
  rightOperand = parseInt(rightOperand);

  if (leftOperand < 0 || rightOperand < 0) {
      alert("Error: Invalid input.");
      return;
  }

  let result;
  switch (operator) {
      case "+":
          result = leftOperand + rightOperand;
          break;
      case "-":
          result = leftOperand - rightOperand;
          break;
      case "*":
          result = leftOperand * rightOperand;
          break;
      case "/":
          if (rightOperand === 0) {
              alert("it over 9000!");
              return;
          }
          result = leftOperand / rightOperand;
          break;
      case "%":
          if (rightOperand === 0) {
              alert("it over 9000!");
              return;
          }
          result = leftOperand % rightOperand;
          break;
      default:
          alert("Error: ");
          return;
  }

  alert("ผลลัพธ์: " + result);
  console.log("ผลลัพธ์:", result);
}

$(document).ready(function() {
  $("#calculateButton").on("click", function(e) {
      showResult();
  });

  setInterval(function () {
      alert("use me..., Haloooo");
  }, 30000);
});
