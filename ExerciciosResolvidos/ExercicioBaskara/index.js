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
