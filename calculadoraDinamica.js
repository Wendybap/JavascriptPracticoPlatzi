const h1 = document.querySelector("h1");
h1.innerHTML = "Manipulación del DOM";

const titulo = document.getElementsByClassName("subTitulo");
titulo[0].innerHTML = "Calculadora básica";
console.log(titulo);

// Escuchar los eventos

const buttonsNumSimb = [
  { value: "C", type: "borrarTodo" },
  { value: "&larr;", type: "borrar" },
  { value: "/", type: "operador" },
  { value: "*", type: "operador" },
  { value: "7", type: "numero" },
  { value: "8", type: "numero" },
  { value: "9", type: "numero" },
  { value: "+", type: "operador" },
  { value: "4", type: "numero" },
  { value: "5", type: "numero" },
  { value: "6", type: "numero" },
  { value: "-", type: "operador" },
  { value: "2", type: "numero" },
  { value: "3", type: "numero" },
  { value: "1", type: "numero" },
  { value: "=", type: "igual" },
  { value: "0", type: "numero" },
  { value: ".", type: "numero" },
];
console.log(buttonsNumSimb);
const resultado = document.getElementById("resultado");

function getButtonsNumSimb() {
  const buttons = document.getElementById("buttonDinamico");
  buttons.classList.add("calculadora-btn");

  for (let i = 0; i < buttonsNumSimb.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = buttonsNumSimb[i].value;
    button.classList.add("btn");
    button.classList.add(buttonsNumSimb[i].type);
    button.addEventListener("click", buttonClick);

    buttons.appendChild(button);
  }
}

function buttonClick(evento) {
  const button = evento.target;
  const type = button.classList.contains("numero")
    ? "numero"
    : button.classList.contains("operador")
    ? "operador"
    : button.classList.contains("borrarTodo")
    ? "borrarTodo"
    : button.classList.contains("borrar")
    ? "borrar"
    : "igual";
  const value = button.textContent;

  switch (type) {
    case "numero":
      agregarAlResultado(value);
      break;
    case "operador":
      agregarOperador(value);
      break;
    case "igual":
      calcular();
      break;
    case "borrarTodo":
      borrarTodo();
      break;
    case "borrar":
      borrar();
      break;

    default:
      break;
  }
}

function agregarAlResultado(value) {
  resultado.value += value;
}

function agregarOperador(operador) {
  resultado.value += ` ${operador} `;
}
function calcular() {
  resultado.value = eval(resultado.value);
}

function borrarTodo() {
  resultado.value = "";
}

function borrar() {
  resultado.value = resultado.value.slice(0, -1);
}

getButtonsNumSimb();
