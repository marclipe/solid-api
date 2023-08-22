import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = []; //é o banco de dados

  async findByEmail(email: string): Promise<User> {
    //vou encontrar um e-mail que seja igual esse email que estou recebendo
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user)
  }
}