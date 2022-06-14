function suma(a, b) {
  return a + b;
}

const respuesta = suma(3, 9);
console.log(respuesta);

function division(a, b = 4) {
  return a / b;
}
const resultado = division(2);

console.log(resultado);

const resta = function (a, b) {
  return a - b;
};

const solucion = resta(3, 0);
console.log(solucion);

const multiplicacion = (a, b) => {
  return a * b;
};
const igual = multiplicacion(4, 9);
console.log(igual);

const sustraccion = function (a, b, c, d) {
  return a - b - c - d;
};
const valor = sustraccion(6, 4, 3, 2);
console.log(valor);
