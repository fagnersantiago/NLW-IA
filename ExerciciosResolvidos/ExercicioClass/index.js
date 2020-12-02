//The code bellow checks if user is administrator and return true or false
class Admin {
  constructor(email, password) {
    this.admin = {
      email,
      password,
    };
  }

  isAdmin() {
    const { email, password } = this.admin;

    if (email === "admin@teste.com.br" && password === "senha1245") {
      return true;
    } else return !true;
  }
}
class User extends Admin {
  constructor() {
    super();
  }
}
const user1 = new User("admin@teste.com.br", "senha123456");
const admin = new Admin("admin@teste.com.br", "senha1245");

console.log(user1.isAdmin());
console.log(admin.isAdmin());