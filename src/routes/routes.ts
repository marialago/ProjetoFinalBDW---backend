import { Router } from "express";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { AuthenticateUserController } from "../modules/acount/authenticateUser/authenticateUserController";
import { CreateSellerController } from "../modules/compra/createSellerController";
import { FindAllPurchaseController } from "../modules/usuario/useCases/compras/findAllPurchaseController";
import { CreateUserController } from "../modules/usuario/useCases/createUser/UserController";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const createSellerController = new CreateSellerController();

const findAllPurchase = new FindAllPurchaseController();

routes.post("/authenticate", authenticateUserController.handle);

routes.post("/user", createUserController.handle);

routes.post("/seller", ensureAuthenticateUser, createSellerController.handle);

routes.get("/user/purchase", ensureAuthenticateUser, findAllPurchase.handle)

export{ routes };