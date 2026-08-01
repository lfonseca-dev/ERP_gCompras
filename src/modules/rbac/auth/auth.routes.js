import { Router } from "express";
import AuthController from "./auth.controller.js";
import { validate} from "../../../core/middlewares/validate.js";
import { loginDTO } from "./auth.dto.js";

const router = Router();

router.post("/login", 
    validate(loginDTO), 
    AuthController.login
);

export default router;