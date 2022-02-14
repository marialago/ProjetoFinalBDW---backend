import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export async function ensureAuthenticateUser(request: Request, response: Response, next: NextFunction){
    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(401).json({
            message: "Token missing",
        });
    }

    //bearer 30293094
    // [0] bearer
    // [1] 30293094
    const [,token] = authHeader.split(" ")

    try{
        const{ sub } = verify(
            token, 
            "d3aa349c8d932ea71f11aa096ba29f61") as IPayload;
        
        request.id_usuario = sub;

        return next();
    }catch(err){
        return response.status(401).json({
            message: "Invalid token!",
        });
    }

}