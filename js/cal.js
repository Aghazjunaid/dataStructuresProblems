function calculatorV1(a, b, operator) {
    let ans
    if (operator === "add") {
      ans = a + b;
    } else if (operator === "subtract") {
        ans = a - b;
    } else if (operator === "divide") {
        ans = a / b;
    } else if (operator === "multiply") {
        ans = a * b;
    } else {
        ans = "Not a valid operator"
    }
    return ans
  }
  
  console.log(calculatorV1(1, 3, "add")); // 4
  console.log(calculatorV1(10, 2, "subtract")); // 8
  console.log(calculatorV1(10, 5, "divide")); // 2
  console.log(calculatorV1(10, 3, "multiply")); // 30
  console.log(calculatorV1(10, 3, "modular")); // Not a valid operator