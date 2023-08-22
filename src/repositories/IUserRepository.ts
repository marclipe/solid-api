import { User } from "../entities/User";

export interface IUsersRepository {
  //Vamos dizer quais métodos vamos ter no nosso usuário
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>; //Vai salvar o usuário no Banco
}