document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    let currentInput = "";
    let operator = null;
    let firstOperand = null;
  
    // Function to update the display
    function updateDisplay(value) {
      display.textContent = value;
    }
  
    // Function to handle number and decimal input
    function handleNumber(value) {
      if (value === "." && currentInput.includes(".")) return;
      currentInput += value;
      updateDisplay(currentInput);
    }
  
    // Function to handle operator input and show it on the display
    function handleOperator(op) {
      if (currentInput === "" && firstOperand !== null) {
        // Change the operator if no new number was entered
        operator = op;
        updateDisplay(firstOperand + " " + operator);
        return;
      }
  
      if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
      } else if (operator) {
        firstOperand = calculate(firstOperand, parseFloat(currentInput), operator);
      }
  
      operator = op;
      currentInput = "";
      updateDisplay(firstOperand + " " + operator); // Show the operator on display
    }
  
    // Function to perform calculations
    function calculate(a, b, op) {
      switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        default: return b;
      }
    }
  
    // Function to handle the "=" button
    function handleEquals() {
      if (operator && currentInput !== "") {
        const result = calculate(firstOperand, parseFloat(currentInput), operator);
        updateDisplay(result);
        currentInput = result.toString();
        firstOperand = null;
        operator = null;
      }
    }
  
    // Function to clear the calculator
    function handleClear() {
      currentInput = "";
      operator = null;
      firstOperand = null;
      updateDisplay("0");
    }
  
    // Add event listeners to buttons
    document.querySelectorAll(".btn").forEach(button => {
      button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
  
        if (button.classList.contains("operator")) {
          handleOperator(value);
        } else if (value === "=") {
          handleEquals();
        } else if (value === "C") {
          handleClear();
        } else {
          handleNumber(value);
        }
      });
    });
  });
  