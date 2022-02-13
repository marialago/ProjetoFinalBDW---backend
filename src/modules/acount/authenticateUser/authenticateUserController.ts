import { Request, Response } from "express";
import { AuthenticateUserCase } from "./authenticateUserCase";


export class AuthenticateUserController{
    async handle(request: Request, response: Response){
        const { username, password} = request.body
        

        const authenticateUserCase = new AuthenticateUserCase();
        const result = await authenticateUserCase.execute({
            username,
            password
        })
        
        return response.json(result);

  
    }
}