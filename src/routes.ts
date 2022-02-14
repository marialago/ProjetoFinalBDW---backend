import { Router } from "express";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";
import { AuthenticateUserCase } from "./modules/acount/authenticateUser/authenticateUserCase";
import { AuthenticateUserController } from "./modules/acount/authenticateUser/authenticateUserController";
import { CreateSellerController } from "./modules/compra/createSellerController";
import { CreateUserController } from "./modules/usuario/useCases/createUser/UserController";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const createSellerController = new CreateSellerController();

routes.post("/authenticate", authenticateUserController.handle);

routes.post("/user/", createUserController.handle);

routes.post("/seller", ensureAuthenticateUser, createSellerController.handle);

export{ routes };