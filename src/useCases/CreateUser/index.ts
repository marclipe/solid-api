import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider(); 
const postgresUsersRepository = new PostgresUsersRepository();

//A gente passa para essa classe as implementações que ela vai fazer
//Agora ela tem funcionalidades
const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository, 
  mailtrapMailProvider
);

//Tudo questão de dependência que passamos de um arquivo para o outro
const createUserController = new CreateUserController(
  createUserUseCase
); 

export { createUserUseCase, createUserController }
