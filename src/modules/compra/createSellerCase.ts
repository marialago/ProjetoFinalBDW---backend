import { prisma } from "../../database/prismaUser"


interface ICreateSeller {
    id_usuario: string,
    id_produto: string
}

export class CreateSellerCase{
    async execute({id_usuario, id_produto}: ICreateSeller){
        const seller = await prisma.compra.create({
            data:{
                id_usuario,
                id_produto
            },
        });
    return seller;
    }
}