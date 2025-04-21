let string = "";
let display = document.getElementById("display");

// Main button click handler
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', e => {
    let val = e.target.innerText;

    if (val === "=") {
      try {
        string = eval(string).toString();
      } catch {
        string = "Error";
      }
    } else if (val === "C") {
      string = "";
    } else {
      string += val;
    }

    display.value = string;
  });
});

// √ Square root
function sqrt() {
  try {
    string = Math.sqrt(eval(string)).toString();
    display.value = string;
  } catch {
    string = "";
    display.value = "Error";
  }
}

// Power function
function power() {
  let base = parseFloat(prompt("Enter base:"));
  let exp = parseFloat(prompt("Enter exponent:"));
  if (!isNaN(base) && !isNaN(exp)) {
    string = Math.pow(base, exp).toString();
    display.value = string;
  } else {
    string = "";
    display.value = "Invalid input";
  }
}

// BMI Calculator
function bmi() {
  let weight = parseFloat(prompt("Enter weight in kg:"));
  let height = parseFloat(prompt("Enter height in meters:"));
  if (weight > 0 && height > 0) {
    let result = (weight / (height * height)).toFixed(2);
    string = result;
    display.value = `BMI: ${result}`;
  } else {
    string = "";
    display.value = "Invalid input";
  }
}

// Convert current expression to percent
function toPercent() {
  try {
    string = (eval(string) / 100).toString();
    display.value = string;
  } catch {
    string = "";
    display.value = "Error";
  }
}

// Inches to cm
function convertInches() {
  let inches = parseFloat(prompt("Enter inches:"));
  if (!isNaN(inches)) {
    let result = (inches * 2.54).toFixed(2);
    string = result;
    display.value = `${result} cm`;
  } else {
    string = "";
    display.value = "Invalid input";
  }
}

// Celsius to Fahrenheit
function convertTemp() {
  let celsius = parseFloat(prompt("Enter °C:"));
  if (!isNaN(celsius)) {
    let result = (celsius * 9 / 5 + 32).toFixed(2);
    string = result;
    display.value = `${result} °F`;
  } else {
    string = "";
    display.value = "Invalid input";
  }
}

// Days to minutes
function convertDays() {
  let days = parseFloat(prompt("Enter days:"));
  if (!isNaN(days)) {
    let result = (days * 24 * 60).toString();
    string = result;
    display.value = `${result} minutes`;
  } else {
    string = "";
    display.value = "Invalid input";
  }
}
