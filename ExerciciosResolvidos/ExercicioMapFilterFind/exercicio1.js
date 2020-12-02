

///////exercicio map///////

const user = [
  { name: "Fagner", age: 32, company: "Senai" },
  { name: "Diogo", age: 26, company: "Seai" },
  { name: "João", age: 16, company: "Sesi" },
  { name: "Maria", age: 17, company: "Ilha Soft" },
];
const age = user.map((age) => age.age);

console.log(age);

///////EXERCÍCIO FILTER/////

const ages = user.filter((user) => user.age > 18 && user.company === "Senai");

console.log(ages);

///////EXERCICIO FIND
const findUserGoogle = user.find((find) => find.company === "Ilha Soft");

console.log(findUserGoogle);

/////map join with filter

const result = user
  .map((user) => ({ ...user, age: user.age * 2 }))
  .filter((user) => user.age >= 50);

console.log(result);

