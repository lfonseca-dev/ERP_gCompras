import { Router } from "express";
import UsuarioController from "./usuario.controller.js";
import { validate } from "../../../core/middlewares/validate.js";
import { createUsuarioDTO, updateUsuarioDTO, getUsuarioDTO } from "./usuario.dto.js";

const router = Router();

router.post("/", 
    validate(createUsuarioDTO), 
    UsuarioController.create
);

router.get("/",
    UsuarioController.getAll
);

router.get("/:id",
    validate(getUsuarioDTO, "params"),
    UsuarioController.getById
);

router.put("/:id",
    validate(getUsuarioDTO, "params"),
    validate(updateUsuarioDTO), 
    UsuarioController.update
);

router.delete("/:id",
    validate(getUsuarioDTO, "params"), 
    UsuarioController.delete
);

export default router;