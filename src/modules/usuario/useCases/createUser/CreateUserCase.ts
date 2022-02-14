import { prisma } from "../../../../database/prismaUser";
import { hash } from "bcrypt"


interface ICreateUser{
    username: string;
    password: string
}

export class CreateUserCase{
    async execute({ password, username}: ICreateUser) {
        //validar se usuario existe
        const userExist = await prisma.usuario.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive"
                }
            }
        })

        if(userExist){
            throw new Error("user already exists");
            
        }

        const hashPassword = await hash(password, 10);
        //criptografar senha

        //salvar usuario
        const user = await prisma.usuario.create({
            data: {
                username,
                password: hashPassword,
            },
        });
    return user;
    }
}