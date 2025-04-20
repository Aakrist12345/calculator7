let string = "";
let display = document.getElementById("display");

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', e => {
    let val = e.target.innerText;

    if (val === "=") {
      try {
        string = eval(string);
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

// Extra features:
function sqrt() {
  try {
    string = Math.sqrt(eval(string)).toString();
    display.value = string;
  } catch {
    display.value = "Error";
  }
}

function power() {
  let base = prompt("Enter base:");
  let exp = prompt("Enter exponent:");
  string = Math.pow(base, exp).toString();
  display.value = string;
}

function bmi() {
  let weight = parseFloat(prompt("Enter weight in kg:"));
  let height = parseFloat(prompt("Enter height in meters:"));
  if (height > 0 && weight > 0) {
    let result = (weight / (height * height)).toFixed(2);
    string = result;
    display.value = `BMI: ${result}`;
  } else {
    display.value = "Invalid input";
  }
}

function toPercent() {
  string = (eval(string) / 100).toString();
  display.value = string;
}

function convertInches() {
  let inches = parseFloat(prompt("Enter inches:"));
  display.value = `${inches * 2.54} cm`;
}

function convertTemp() {
  let celsius = parseFloat(prompt("Enter °C:"));
  display.value = `${(celsius * 9 / 5 + 32).toFixed(2)} °F`;
}

function convertDays() {
  let days = parseFloat(prompt("Enter days:"));
  display.value = `${days * 24 * 60} minutes`;
}
