import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const password = process.env.MAIL_PASSWORD

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail; //vai vir do Nodemailer

  constructor() {
    //Com esse transporter já conseguimos enviar o email
    this.transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "7adc4c2bf1fa0f",
        pass: password,
      },
    });
  }

  //Ela já sabe quais métodos precisa implementar
  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name, 
        address: message.to.email
      }, 
      from: {
        name: message.from.name, 
        address: message.from.name
      }, 
      subject: message.subject,
      html: message.body //corpo da msg
    })
  }
}