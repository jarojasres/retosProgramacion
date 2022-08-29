/*
 * Reto #0
 * EL FAMOSO "FIZZ BUZZ"
 * Fecha publicación enunciado: 27/12/21
 * Fecha publicación resolución: 03/01/22
 * Dificultad: FÁCIL
 * Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 *
 */

const run = () => {
  
  const items = new Array(100).fill(1).map((_, index) => index + 1);

  for (let item of items) {
    const divisibleByThree = item % 3 === 0;
    const divisibleByFive = item % 5 === 0;

    if(divisibleByFive && divisibleByThree) {
      console.log("fizzbuzz");
    } else if (divisibleByFive) {
      console.log("buzz");
    } else if (divisibleByThree) {
      console.log("fizz");
    } else {
      console.log(item);
    }
  }
};

run();