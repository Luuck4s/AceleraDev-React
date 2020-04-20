const prompt = require("prompt-sync")();
const calculadora = require("./calc");

const options = () => {
  console.log(`
    [0] - Sair
    [1] - Somar
    [2] - Subtrair
    [3] - Multiplicar
    [4] - Dividir
  `);
};

const optionSelected = (option) => {
  const num1 = Number(prompt("Digite um numero: "));
  const num2 = Number(prompt("Digite outro numero: "));

  switch (option) {
    case 1:
      return calculadora.sum(num1, num2);
      break;
    case 2:
      return calculadora.sub(num1, num2);
      break;
    case 3:
      return calculadora.mult(num1, num2);
      break;
    case 4:
      return calculadora.div(num1, num2);
      break;
    default:
      break;
  }
};

let option;
while (option != "0") {
  options();
  option = Number(prompt("Qual a opção ? "));

  if (option == 0) {
    break;
  }

  if (option < 0 || option > 4) {
    continue;
  }

  const result = optionSelected(option);

  console.log(`\n\nO resultado da operação é ${result}`);
}
