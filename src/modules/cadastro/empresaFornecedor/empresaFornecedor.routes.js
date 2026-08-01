import { Router } from "express";
import EmpresaFornecedorController from "./empresaFornecedor.controller.js";
import { createEmpresaFornecedorDTO,idEmpresaFornecedorDTO } from "./empresaFornecedor.dto.js";
import { validate } from "../../../core/middlewares/validate.js";
import { auth } from "../../../core/middlewares/auth.middleware.js";

const router = Router();

router.post(
    "/",
    auth,
    validate(createEmpresaFornecedorDTO),
    EmpresaFornecedorController.create
);

router.get(
    "/",
    auth,
    EmpresaFornecedorController.getAllByEmpresa
);

router.get(
    "/:id",
    auth,
    validate(idEmpresaFornecedorDTO, "params"),
    EmpresaFornecedorController.getById
);

export default router;