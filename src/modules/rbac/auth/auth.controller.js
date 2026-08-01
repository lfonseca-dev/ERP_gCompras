import AuthService from "./auth.service.js";
import * as response from "../../../core/utils/response.js";
import { asyncHandler } from "../../../core/utils/asyncHandler.js";

const AuthController = {
    login: asyncHandler(async (req, res) => {
        const data = await AuthService.login(req.body, req);
        return response.success(res, {
            message: "Login realizado com sucesso",
            data
        }); 
    })
};

export default AuthController;