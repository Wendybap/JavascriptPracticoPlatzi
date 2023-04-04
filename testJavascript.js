/*Variables y operaciones

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre = wendy (string)
Apellido = arcia (string)
Nombre de usuario en Platzi = wendy123 (string)
Edad = 37 (number)
Correo electrónico = wendyarcia1811@gmail.com (string)
Mayor de edad = true (boolean)
Dinero ahorrado = 100 (number)
Deudas = 40 (number)

3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
R:
*/
let nombre = "Wendy";
let apellido = "Arcia";
let nombreDeUsuarioEnPlatzi = "wendy123...";
let edad = 37;
let correoElectrónico = "wendyarcia1811@gmail.com";
let mayorDeEdad = true;
let dineroAhorrado = 100;
let deudas = 40;

console.log(typeof nombre);
console.log(typeof apellido);
console.log(typeof nombreDeUsuarioEnPlatzi);
console.log(typeof edad);
console.log(typeof correoElectrónico);
console.log(typeof mayorDeEdad);
console.log(typeof dineroAhorrado);
console.log(typeof deudas);

/*4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

R: Nombre completo (nombre y apellido)
*/
function nombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`;
}
console.log(nombreCompleto(nombre, apellido));
console.log(nombreCompleto("Pedro", "Perez"));

let nombreCompleto2 = `Respuesta 4.1: ${nombre} ${apellido}`;
console.log(nombreCompleto2);

//----------------------------------------------------------------
// R: Dinero real (dinero ahorrado menos deudas)

function dineroReal(dineroAhorrado, deudas) {
  return dineroAhorrado - deudas;
}
console.log(dineroReal(dineroAhorrado, deudas));

let dineroReal2 = dineroAhorrado - deudas;
console.log(dineroReal2);

/*Funciones

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por 
parámetros y argumentos en una función:
*/

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log(
  "Mi nombre es " +
    completeName +
    ", pero prefiero que me digas " +
    nickname +
    "."
);

// R:

function nombreYUsuario(name, lastname, nickname) {
  let nombreComp = nombreCompleto(name, lastname);
  return `Mi nombre es ${nombreComp} , pero prefiero que me digas ${nickname}`;
}
console.log(nombreYUsuario(name, lastname, nickname));
console.log(nombreYUsuario("Wendy", "Arcia", "Wen"));

/*Condicionales

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
*/

const tipoDeSuscripcion = "Free";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    break;
}

// R:

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
} else {
  console.log("Debe introducir un dato valido");
}

/*3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora 
solo con if (sin else ni else if).
*/
const suscripciones = {
  free: "Solo puedes tomar los cursos gratis",
  basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
  expertplus:
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

function getTipoDeSuscripcion(suscripciones) {
  if (suscripciones === "free") {
    console.log("Solo puedes tomar los cursos gratis");
    return;
  }

  if (suscripciones === "basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return;
  }

  if (suscripciones === "expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return;
  }

  if (suscripciones === "expertplus") {
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    return;
  }
  console.log("esto no existe");
}

getTipoDeSuscripcion("free");

/*💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este 
comportamiento con arrays u objetos y un solo condicional. 😏*/

const tipoDeSuscripcion1 = ["Free", "Basic", "Expert", "ExpertPlus"];
const Suscripcion1 = [
  "Solo puedes tomar los cursos gratis",
  "Puedes tomar casi todos los cursos de Platzi durante un mes",
  "Puedes tomar casi todos los cursos de Platzi durante un año",
  "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
];
for (let i = 0; i < Suscripcion1.length; i++) {
  if (tipoDeSuscripcion === tipoDeSuscripcion1[i]) {
    console.log(Suscripcion1[i]);
  }
}

/*Ciclos

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:*/
for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}

// R:

let i = 0;
while (i < 5) {
  console.log(`El valor de i es: ${i}`);
  i++;
}

let num = 10;
while (num >= 2) {
  console.log(`El valor de num es: ${num}`);
  num--;
}

/*3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, 
mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.
R:
*/

// let usuario = Number(prompt("¿Cuanto es 2 + 2"));

function respuestaCorrecta(usuario) {
  while (usuario !== 4) {
    usuario = Number(prompt("¿Cuanto es 2 + 2"));
  }

  document.write(`<h1>Felicitaciones!!!!</h1>`);
}

// respuestaCorrecta(usuario);

/*Listas

/*2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.*/

let tallas = ["ss", "s", "m", "l", "xl", "xxl"];

function primerElemento(tallas) {
  return tallas[0];
}
console.log(primerElemento(tallas));

// Otra forma de hacerlo
let remeras = [
  { color: "rojo" },
  { color: "azul" },
  { color: "verde" },
  { color: "rosa" },
];

let primerColorRemera = remeras.find(function (remera) {
  return remera.color;
});

console.log(primerColorRemera);

/*3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno 
(no se vale imprimir el array completo).*/

tallas.forEach(function (talla) {
  console.log(talla);
});

// Otra forma de hacerlo

function retornarCadaElemento(tallas) {
  for (i = 0; i < tallas.length; i++) {
    console.log(tallas[i]);
  }
}
retornarCadaElemento(tallas);

/*4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno 
(no se vale imprimir el objeto completo)*/
let datos = {
  nombre: "Wendy",
  apellido: "Arcia",
  edad: "37",
  hobbies: ["Escuchar música", "Comer", "Pasear"],
};

const nuevoObjeto = Object.values(datos);
nuevoObjeto.forEach(function (nuevoObjeto) {
  console.log(nuevoObjeto);
});

function retornarCadaElem(datos) {
  const nuevoObj = Object.values(datos);
  for (i = 0; i < nuevoObj.length; i++) console.log(nuevoObj[i]);
}
retornarCadaElem(datos);
