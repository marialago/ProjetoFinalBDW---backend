import { Request, Response } from "express";
import { CreateSellerCase } from "./createSellerCase";


export class CreateSellerController{
    async handle(request: Request, response: Response){
        const { id_usuario, id_produto } = request.body;
        const createSellerCase = new CreateSellerCase();


        const seller = await createSellerCase.execute({
            id_usuario,
            id_produto
        });
        return response.json(seller);
    }
}