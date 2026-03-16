console.log("EJ01______________________________________________________________");
import escribir from './EJ01.js';
const mensaje = escribir("quiero", "queque");
console.log(mensaje);

console.log("EJ02______________________________________________________________");


import{multiplicarPi, sumar, restar, dividir}  from './EJ02.js'

const suma = sumar(5, 3);
console.log(suma);

const resta = restar(10, 4);
console.log(resta);

const resultado = multiplicarPi(3);
console.log(resultado);

const division = dividir(20, 5);
console.log(division);

console.log("EJ03______________________________________________________________");
import alumno from './EJ03.js';
const alumno1 = alumno('Juan', 12345678);
console.log(alumno1.username, alumno1.dni);
const alumno2 = alumno('María', 87654321);
console.log(alumno2.username, alumno2.dni);

console.log("EJ04______________________________________________________________");

import copiar from './EJ04.js';
copiar("./entrada.txt", "./salida.txt");