import { User } from "../domain/entities/user";
import { CreateUser } from "./create-user-use-case";
import { UserRepository } from "../domain/repositories/user-repository";

const fakeUserRepository: UserRepository = {
  create: async (user: User) => {
    return;
  },
};
describe(" Create USER", () => {
  it("Should be able create a new user", async () => {
    const user = new CreateUser(fakeUserRepository);

    const userCreated = await user.execute({
      name: "john doe",
      email: "email@john.com ",
      password: "1234596",
    });

    expect(userCreated).toHaveProperty("id");
  });
});
