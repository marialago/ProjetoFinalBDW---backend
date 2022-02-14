import { findSync } from "@prisma/client/runtime";
import { Request, Response } from "express";
import { FindAllPurchase } from "./findAllPurchase";



export class FindAllPurchaseController{
    async handle(request: Request, response: Response){
        const { id_usuario } = request

        const findAllPurchase = new FindAllPurchase;
        const compras = await findAllPurchase.execute(id_usuario);

        response.json(compras);
    }
}