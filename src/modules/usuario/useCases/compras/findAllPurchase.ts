import { prisma } from "../../../../database/prismaUser";



export class FindAllPurchase{
    async execute(id_usuario: string){
        const compras = await prisma.usuario.findMany({
            where: {
                id: id_usuario
            },
            select:{
                compra: true,
                id: true,
                username: true,
            }
        });
        return compras;
    }
}