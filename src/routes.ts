import { Router } from "express";
import { CreateUserController } from "./modules/usuario/useCases/createUser/UserController";

const routes = Router();

const createUserController = new CreateUserController();

routes.post("/user/", createUserController.handle)

export{ routes };