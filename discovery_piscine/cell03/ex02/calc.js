function showResult() {
    let leftOperand = parseInt(document.getElementById("leftInput").value);
    let operator = document.getElementById("operator").value;
    let rightOperand = parseInt(document.getElementById("rightInput").value);
  
    if (
      isNaN(leftOperand) ||
      isNaN(rightOperand) ||
      leftOperand < 0 ||
      rightOperand < 0
     ) {
      alert("Error :(");
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
        alert("ผู้ดำเนินการไม่ถูกต้อง");
        return;
    }
  
    alert("ผลลัพธ์: " + result);
    console.log("ผลลัพธ์:", result);
  }
  
  setInterval(function () {
    alert("use me..., Haloooo");
  }, 30000);