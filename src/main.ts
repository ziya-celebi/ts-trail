const display = document.createElement("button");

document.body.appendChild(display);

const plus = document.createElement("button");

document.body.appendChild(plus);

const op = String(prompt("Enter an operation +, -, *, /, exit"));
const a = Number(prompt("Enter your first number"));
const b = Number(prompt("Enter your second number"));
let sum: number = 0;

switch (op) {
  case "+":
    sum = a + b;
    break;
  case "-":
    sum = a - b;
    display.textContent = String(sum);
    break;
  case "*":
    sum = a * b;
    display.textContent = String(sum);
    break;
  case "/":
    sum = a / b;
    display.textContent = String(sum);
    break;
}

plus.addEventListener("click", () => {
  sum = a + b; // Adds the numbers again when clicked
  display.textContent = String(sum); // Shows the result on the display button
});
