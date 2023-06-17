//metodo rest - para recibir cantidad de argumentos dinamicos

const suma = (...num) => {
  let total = 0;
  for (let numero of num) {
    total += numero;
  }
  return total;
};

console.log(suma(1, 2, 3, 4, 5));
console.log(suma(1, 3, 5, 7, 9));
