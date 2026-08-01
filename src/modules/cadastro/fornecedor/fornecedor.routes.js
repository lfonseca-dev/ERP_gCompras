import { Router } from "express";
import FornecedorController from "./fornecedor.controller.js";
import { validate } from "../../../core/middlewares/validate.js";
import { createFornecedorDTO, updateFornecedorDTO, getFornecedorDTO, getDescricaoFornecedorDTO } from "./fornecedor.dto.js";
import { auth } from "../../../core/middlewares/auth.middleware.js";

const router = Router();

router.post("/", 
    auth,
    validate(createFornecedorDTO), 
    FornecedorController.create
);

router.get("/", 
    auth,
    FornecedorController.getAll
);

router.get("/:id", 
    auth,
    validate(getFornecedorDTO, "params"), 
    FornecedorController.getById
);

router.get("/descricao/:descricao",
    auth,
    validate(getDescricaoFornecedorDTO, "params"),
    FornecedorController.getByDescricao
);

router.put("/:id", 
    auth,
    validate(getFornecedorDTO, "params"),
    validate(updateFornecedorDTO), 
    FornecedorController.update
);

router.delete("/:id", 
    auth,
    validate(getFornecedorDTO, "params"), 
    FornecedorController.delete
);

export default router;