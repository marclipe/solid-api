interface address {
  email: string; 
  name: string;
}

export interface IMessage {
  to: address;
  from: address;
  subject: string; 
  body: string;
}

export interface IMailProvider {
  //Sempre que o método é assíncrono ele retorna uma Promise
  sendMail(message: IMessage): Promise<void>;
}