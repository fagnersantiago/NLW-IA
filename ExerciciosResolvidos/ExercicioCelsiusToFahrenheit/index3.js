

const aleatoryNumber = [0, 3, 28, 56, 32, 8, 5, 159];

const isPer = (n) => n % 2 === 0;

const perNumbers = aleatoryNumber.filter(isPer);

console.log(perNumbers);

const celsius = [0, 5, 10, 15, 20, 25, 30, 35, 40];

const toFahrenheit = (value) => value * 1.8 + 32;

const toCelsius = celsius.map(toFahrenheit);

console.log(toCelsius);

const a = 2;
const b = 2;
const c = -1;
const x = b * b - 4 * a * c;
const coeficiente1 = -b + x * x;
const coeficiente2 = -b - x * x;
const result = coeficiente1 / (2 * a);
const result2 = coeficiente2 / (2 * a);

if (x <= 0) {
  return console.log(x, "não há raizes reais");
}

console.log(x);
console.log(result);
console.log(result2);
