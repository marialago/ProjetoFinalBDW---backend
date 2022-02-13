import { Router } from "express";
import { AuthenticateUserCase } from "./modules/acount/authenticateUser/authenticateUserCase";
import { AuthenticateUserController } from "./modules/acount/authenticateUser/authenticateUserController";
import { CreateUserController } from "./modules/usuario/useCases/createUser/UserController";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

routes.post("/authenticate", authenticateUserController.handle);

routes.post("/user/", createUserController.handle);


export{ routes };