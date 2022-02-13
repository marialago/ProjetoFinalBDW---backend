import { Request, Response } from "express";
import { CreateUserCase } from "./CreateUserCase";

export class CreateUserController{
    async handle(request: Request, response: Response){
        const { username, password} = request.body
        
        const createUserCase = new CreateUserCase();
        const result = await createUserCase.execute({
            username, 
            password
        });

        return response.json(result);
    }
}