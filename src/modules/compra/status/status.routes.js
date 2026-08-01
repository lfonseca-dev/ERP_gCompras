import {Router} from "express";
import StatusController from "./status.controller.js";
import { validate } from "../../../core/middlewares/validate.js";
import { createStatusDTO, updateStatusDTO, getStatusDTO } from "./status.dto.js";

const router = Router();

router.post("/", 
    validate(createStatusDTO), 
    StatusController.create
);

router.get("/",
    StatusController.getAll
);

router.get("/:id",
    validate(getStatusDTO, "params"),
    StatusController.getById
);

router.put("/:id",
    validate(getStatusDTO, "params"),
    validate(updateStatusDTO), 
    StatusController.update
);

router.delete("/:id",
    validate(getStatusDTO, "params"), 
    StatusController.delete
);

export default router;