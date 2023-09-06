import { UserRepository } from "../domain/repositories/user-repository";
import { User } from "../domain/entities/user";

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute({ name, email, password }: CreateUserRequest) {
    const user = User.create({
      name,
      email,
      password,
    });

    this.userRepository.create(user);

    return user;
  }
}
