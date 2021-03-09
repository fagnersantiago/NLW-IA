const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

function verifyIfAccountExists(request, response, next) {
  const { cpf } = request.headers;

  const customer = customers.find((customers) => customers.cpf === cpf);

  if (!customer) {
    return response.json({ error: "customer not found" });
  }

  request.customer = customer;
  return next();
}

function getBalance(statement) {
  const balance = statement.reduce((accumulator, count) => {
    if (count.type === "credit") {
      return accumulator + count.amount;
    } else {
      return accumulator - count.amount;
    }
  }, 0);

  return balance;
}

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;
  const id = uuid();

  const cpfAlreadyExists = customers.some((customers) => customers.cpf === cpf);

  if (cpfAlreadyExists) {
    return response.status(400).json({ message: "CPF already exists" });
  }

  customers.push({
    cpf,
    name,
    id,
    statement: [],
  });

  return response.status(201).json({
    customers,
  });
});

app.get("/statement/", verifyIfAccountExists, (request, response) => {
  const { customer } = request;

  return response.json(customer.statement);
});

app.post("/deposit", verifyIfAccountExists, (request, response) => {
  const { description, amount } = request.body;

  const { customer } = request;

  const despositOperation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit",
  };

  customer.statement.push(despositOperation);
  return response.json(customer);
});

app.post("/bankDraft", verifyIfAccountExists, (request, response) => {
  const { amount } = request.body;

  const { customer } = request;

  const balance = getBalance(customer.statement);

  if (balance < amount) {
    return response.json({ message: "Insufficiant balance" });
  }

  const statementOperation = {

    amount,
    created_at: new Date(),
    type: "debit",
  };

  customer.statement.push(statementOperation);

  return response.json(statementOperation);
});

app.get("/statement/date", verifyIfAccountExists, (request, response) => {
   
    const { customer } = request;
    const { data } = request.query;
  
    const dataFormat = new Date(data + " 00:00");

    const statement = customer.statement.filter((statement)=>{
        statement.created_at.toDateString() === new Date(dataFormat).toDateString()
    });

    return response.json(statement);

  });

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
