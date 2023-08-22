import { v4 as uuidv4 } from "uuid";

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  //Para criar uma nova entidade crio o constructor
  //E vou omitir o id, o id sendo opcional para não criar um id do zero
  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props) //pega todas as props em uma única linha

    //Se não passar um id, eu vou passar automaticamente para ele
    if(!id) {
      this.id = uuidv4()
    }
  }
}