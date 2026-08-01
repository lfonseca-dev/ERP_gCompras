import { Router } from "express";
import NivelController from "./nivel.controller.js";
import { validate } from "../../../core/middlewares/validate.js";
import { createNivelDTO, updateNivelDTO, getNivelDTO } from "./nivel.dto.js";
import { auth } from "../../../core/middlewares/auth.middleware.js";

const router = Router();

router.post("/", 
    auth,
    validate(createNivelDTO), 
    NivelController.create
);

router.get("/", 
    auth,
    NivelController.getAll
);

router.get("/:id",
    auth,
    validate(getNivelDTO, "params"),
    NivelController.getById
);

router.put("/:id",
    auth,
    validate(getNivelDTO, "params"),
    validate(updateNivelDTO), 
    NivelController.update
);

router.delete("/:id",
    auth,
    validate(getNivelDTO, "params"), 
    NivelController.delete
);

export default router;