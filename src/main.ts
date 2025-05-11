let sum: number = 0;
const op: string | null = prompt("Enter an operation +, -, *, /, exit");
const a: string | null = prompt("Enter your first number");
const b: string | null = prompt("Enter your second number");

const numA = Number(a);
const numB = Number(b);
const oP = String(op);

switch (oP) {
  case "+":
    sum = numA + numB;
    console.log(sum);
    break;
  case "-":
    sum = numA - numB;
    console.log(sum);
    break;
  case "*":
    sum = numA * numB;
    console.log(sum);
    break;
  case "/":
    sum = numA / numB;
    console.log(sum);
    break;
}
