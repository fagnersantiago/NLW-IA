
// Learnig about destructure
const family = {
  name: "Fagner",
  father: "Fernando",
  mother: "Lucia",
  brother: {
    brotherNames: "Fabio , Fabiana, Felipe",
  },
};

const {
  name,
  father,
  mother,
  brother: { brotherNames },
} = family;

console.log(name, father, mother, brotherNames);
