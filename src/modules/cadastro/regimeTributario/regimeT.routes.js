import { Router } from "express";
import RegimeTController from "./regimeT.controller.js";
import { validate } from "../../../core/middlewares/validate.js";
import { createRegimeTDTO, updateRegimeTDTO, getRegimeTDTO } from "./regimeT.dto.js";
import { auth } from "../../../core/middlewares/auth.middleware.js";

const router = Router();

router.post("/",
    auth,
    validate(createRegimeTDTO),
    RegimeTController.create
);

router.get("/",
    auth,
    RegimeTController.getAll
);

router.get("/:id",
    auth,
    validate(getRegimeTDTO, "params"),
    RegimeTController.getById
);

router.put("/:id",
    auth,
    validate(getRegimeTDTO, "params"),
    validate(updateRegimeTDTO),
    RegimeTController.update
);

router.delete("/:id",
    auth,
    validate(getRegimeTDTO, "params"),
    RegimeTController.delete
);

export default router;