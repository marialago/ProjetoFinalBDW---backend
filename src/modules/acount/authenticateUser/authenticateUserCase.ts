import { prisma } from "../../../database/prismaUser";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"
 
interface IAuthenticateUser {
    username: string;
    password: string;
}

 export class AuthenticateUserCase{
     async execute({username, password}: IAuthenticateUser) {
         // receber username, password
    
         // verificar se username cadastrado
         const usuario = await prisma.usuario.findFirst({
              where: {
                username
              }
         })
        if(!usuario){
            throw new Error("username or password invalid!")
        }
         // verificar de senha corresponde ao username
        const passwordMatch = await compare(password, usuario.password);

        if(passwordMatch){
            throw new Error("username or password invalid!")
        }
         // gerar o token
         const token = sign({username}, "d3aa349c8d932ea71f11aa096ba29f61", {
             subject: usuario.id,
             expiresIn: "1d"
         });

         return token;
     }
 }