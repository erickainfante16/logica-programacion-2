const prompt = require("prompt-sync")();

function convertirTemperatura() {
  // Se pide al usuario que ingrese la temperatura
  let entrada = prompt("Ingresa la temperatura en grados Celsius: ");
  let celsius = Number(entrada.trim());

  // Se verifica que no esté vació y sea un número válido
  while (entrada.trim() === "" || isNaN(celsius)) {
    console.log("Error: Ingresa un número válido.");
    entrada = prompt("Intenta de nuevo. Ingresa la temperatura en grados Celsius: ");
    celsius = Number(entrada.trim());
  }

  // Se convierte a Kelvin y Fahrenheit
  let kelvin = celsius + 273.15;
  let fahrenheit = (celsius * 9) / 5 + 32;

  // Imprimimr resultados en consola
  console.log("Grados Kelvin: " + kelvin);
  console.log("Grados Fahrenheit: " + fahrenheit);
}

convertirTemperatura();