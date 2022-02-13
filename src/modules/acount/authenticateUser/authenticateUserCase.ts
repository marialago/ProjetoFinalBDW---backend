import { prisma } from "../../../database/prismaUser";
 
interface IAuthenticateUser {
    username: string;
    password: string;
}

 export class AuthenticateUserCase{
     async execute() {
         // receber username, password

         // verificar se username cadastrado
        const user = await prisma.usuario.findFirst({
            where:{
                username: ""
            }
        })
         // verificar de senha corresponde ao username
        if(user){
            throw new Error("username or password invalid!")
        }
         // gerar o token
     }
 }