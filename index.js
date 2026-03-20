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


console.log("EJ05______________________________________________________________");

import parsearUrl from "./EJ05.js";

let objeto5 = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");

console.log(objeto5);

console.log("EJ06______________________________________________________________");

let objeto6 = parsearUrl("url_mal_formada");

console.log(objeto6);

console.log("EJ07______________________________________________________________");

import obtenerMoneda from "./EJ07.js";
const moneda = obtenerMoneda("AR");
console.log(moneda);
