import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

  //LSP
  constructor(
    private usersRepositoy: IUsersRepository,
    private mailProvider: IMailProvider,
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepositoy.findByEmail(data.email); 

    if (userAlreadyExists) {
      throw new Error('User already exists!')
    }

    //se ele não existe vou criar um usuário novo, na entidade user
    const user = new User(data)

    //Vou salvar o usuário dentro do banco de dados
    await this.usersRepositoy.save(user)

    //Após a criação de usuário
    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      }, 
      from: {
        name: 'Equipe do meu App', 
        email: 'equipe@meuapp.com'
      },
      subject: 'Seja Bem-Vindo à plataforma!',
      body: '<p>Você já pode fazer o login na Plataforma.</p>'
    })
  }
}