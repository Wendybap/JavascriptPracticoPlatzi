# Test Teórico-Práctico de Javascript (Platzi)

## Variables y operaciones

### _1️⃣ Responde las siguientes preguntas:_

- ¿Qué es una variable y para qué sirve?
  R: Es un espacio reservado en memoria y sirve para almacenar datos.

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
  R: Cuando declaramos una variable estamos reservando ese espacio en memoria y cuando la inicializo le estoy asignando valor.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
  R: La suma de números es una operación matemática y la concatenación es la union de cadenas de texto.

- ¿Cuál operador me permite sumar o concatenar?
  R: el operador lógico +

### _2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:_

Nombre
Apellido
Nombre de usuario en Platzi
Edad
Correo electrónico
Mayor de edad
Dinero ahorrado
Deudas

R:

```
Nombre = wendy (string)
Apellido = arcia (string)
Nombre de usuario en Platzi = aprende123 (string)
Edad = 37 (number)
Correo electrónico = wendyarcia1811@gmail.com (string)
Mayor de edad = true (boolean)
Dinero ahorrado = 100 (number)
Deudas = 40 (number)
```

### \_3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

R:

```js
let nombre = "Wendy";
let apellido = "Arcia";
let nombreDeUsuarioEnPlatzi = "aprende123...";
let edad = 37;
let correoElectrónico = "wendyarcia1811@gmail.com";
let mayorDeEdad = true;
let dineroAhorrado = 100;
let deudas = 40;
```

```js
** Con la propiedad typeof podemos conocer el tipo de datos, por ejemplo:
console.log(typeof nombre);
console.log(typeof apellido);
console.log(typeof nombreDeUsuarioEnPlatzi);
console.log(typeof edad);
console.log(typeof correoElectrónico);
console.log(typeof mayorDeEdad);
console.log(typeof dineroAhorrado);
console.log(typeof deudas);
```

### _4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:_

Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

R: Nombre completo (nombre y apellido)

```js
function nombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`;
}
console.log(nombreCompleto(nombre, apellido));
console.log(nombreCompleto("Pedro", "Perez"));

**Otra forma de resolverlo**:

let nombreCompleto2 = `Respuesta 4.1: ${nombre} ${apellido}`;
console.log(nombreCompleto2);
```

R: Dinero real (dinero ahorrado menos deudas)

```js
function dineroReal(dineroAhorrado, deudas) {
  return dineroAhorrado - deudas;
}
console.log(dineroReal(dineroAhorrado, deudas));

**Otra forma de resolverlo**:

let dineroReal2 = dineroAhorrado - deudas;
console.log(dineroReal2);`
```

## Funciones

### _1️⃣ Responde las siguientes preguntas:_

- ¿Qué es una función?
  R: Son las que nos permiten encapsular (guardar) bloques de códigos o instrucciones, que se emplean para resolver un problema o realizar una acción especifica, son reutilizables y ejecutables en el futuro.

- ¿Cuándo me sirve usar una función en mi código?
  R:
  -Cuando tengamos variables o bloques de código muy parecidos, que podemos encapsular y reutilizar cunado lo necesitemos, haciendo cambios en los parámetros y argumentos.
  -Cuando tengamos bloques de códigos muy grandes que puedan ser encapsulados en una función, lo que
  ordenaría y mejoraría la legibilidad del código.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
  R:Los parámetros son las variables que pasamos al momento de declarar una función, mientras que los argumentos son los valores que usamos cuando invocamos la función.

### _2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:_

```js
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
```

R:

```js
function nombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`;
}

console.log(nombreYUsuario(name, lastname, nickname));
console.log(nombreYUsuario("Wendy", "Arcia", "Wen"));

**Otra forma de resolverlo**:

function nombreYUsuario(name, lastname, nickname) {
  let nombreComp = nombreCompleto(name, lastname);
  return `Mi nombre es ${nombreComp} , pero prefiero que me digas ${nickname}`;
}
console.log(nombreYUsuario(name, lastname, nickname));
```

## Condicionales

### _1️⃣ Responde las siguientes preguntas:_

- ¿Qué es un condicional?

  R: Es una estructura de control que permite evaluar si una expresión cumple con una condición o no y dependiendo de esto realiza determinada sentencia o instrucción.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

  R:
  a) if...else: se una para evaluar si la expresión es verdadero o falso.
  b) switch: evalúa si la expresión es igual alguno de los casos evaluados o a lago especifico.
  c) try / catch: se utiliza para capturar errores.

- ¿Puedo combinar funciones y condicionales?
  R: R: Si, las funciones pueden encapsular cualquier bloque de códigos.

### _2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:_

```js
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
```

R:

```js
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
```

### _3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if)._

R:

```js
if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion === "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}
```

### 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

R:

```js
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
```

## Ciclos

### _1️⃣ Responde las siguientes preguntas:_

- ¿Qué es un ciclo?
  R: Es una estructura de control que permite repetir procesos, mientras una condición sea verdadera.

* ¿Qué tipos de ciclos existen en JavaScript?
  R:
  a) for: este lo utilizamos cuando sabemos la cantidad de veces que la estructura repetirá una o varias instrucciones.
  b) for...of: es una variante del for, que usamos para recorrer y acceder a los valores de los elemento de un array, no al indice.
  c) while: este lo utilizamos cuando no sabemos con exactitud la cantidad de veces que necesitemos repetir una o varias instrucciones,
  hasta que la condición inicial cambie.
  d) Do...while: es parecido al while, con la diferencia que primero ejecuta un bloque de código y luego evalúa la condición,
  si es verdadera repite la o las instrucciones, si no sale del ciclo.

* ¿Qué es un ciclo infinito y por qué es un problema?
  R: Es un ciclo cuya ejecución no termina, porque la validación de la condición nunca se cumple y esto afecta el funcionamiento del programa.

* ¿Puedo mezclar ciclos y condicionales?
  R: si, ya que dependiendo de lo que necesitemos hacer dentro del ciclo podemos usar condicionales a parte de la condición que establecemos en el ciclo en si mismo.

### _2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:_

```js
for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}
```

R:

```js
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
```

### _3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar._

💡 Pista: puedes usar la función prompt de JavaScript.
R:

```js
let usuario = Number(prompt("¿Cuanto es 2 + 2"));

function respuestaCorrecta(usuario) {
  while (usuario !== 4) {
    usuario = Number(prompt("¿Cuanto es 2 + 2"));
  }

  document.write(`<h1>Felicitaciones!!!!</h1>`);
}

respuestaCorrecta(usuario);
```

## Listas

### _1️⃣ Responde las siguientes preguntas:_

- ¿Qué es un array?
  R: Es una estructura de datos que almacena una serie de datos localizados por indice, a traves de la sintaxis [] y separados por coma.

- ¿Qué es un objeto?
  R: es una estructura de datos que permite almacenar valores mediante propiedades (clave:valor); a traves de la sintaxis de {} y separados por coma.

- ¿Cuándo es mejor usar objetos o arrays?
  R: Esto depende de lo que se necesite hacer, Los arrays se usan para series que poseen valores simples, mientras que los objetos son utilizadas para las series en que hay distintos objetos y propiedades con diferentes valores.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
  R: Si, los array puede contener objetos, ya que el array es de tipo objeto y los objeto puede contener arrays dentro de sus propiedades.

### _2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento._

R:

```js
let tallas = ["ss", "s", "m", "l", "xl", "xxl"];

function primerElemento(tallas) {
  return tallas[0];
}
console.log(primerElemento(tallas));
```

```js
**Otro ejemplo usando un array de objetos**:
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
```

### _3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo)._

R:

```js
let tallas = ["ss", "s", "m", "l", "xl", "xxl"];

tallas.forEach(function (talla) {
  console.log(talla);
});
```

### _4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo)_

R:

```js
let datos = {
  nombre: "Wendy",
  apellido: "Arcia",
  edad: "37",
  hobbies: ["Escuchar música", "Comer", "Pasear"],
};

function retornarCadaElem(datos) {
  const nuevoObj = Object.values(datos);
  for (i = 0; i < nuevoObj.length; i++) console.log(nuevoObj[i]);
}
retornarCadaElem(datos);
```

## Entra al repo y encontraras muchos ejercicios más 😏....
