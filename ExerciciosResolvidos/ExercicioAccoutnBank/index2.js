//this code return user's account data 

class Account {
  constructor() {
    this.userData = [
      {
        name: "Fagner Santiago",
        accountNamber: 123456,
        agency: 1256,
      },
    ];
  }
}

class Belance extends Account {
  constructor() {
    super();

    const listValues = [
      {
        income: 300,
        outcome: 2,
      },

      {
        income: 200,
        outcome: 100,
      },
    ];

    const userDataAccount = this.userData;

    console.log(`Titular: ${userDataAccount.map((find) => find.name)}`);

    const input = listValues.map((find) => find.income).join(" R$: ");

    console.log(`Depósitos R$: ${input}`);

    const output = listValues.map((find) => find.outcome).join(" R$:- ");

    console.log(`Saques R$:- ${output}`);

    const result = listValues
      .map((result) => result.income - result.outcome++)
      .reduce((accumulator, index) => accumulator + index);

    console.log(`Saldo Atual R$: ${result} `);
  }
}

const results = new Belance();
