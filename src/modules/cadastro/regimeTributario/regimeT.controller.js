import RegimeTService from "./regimeT.service.js";
import * as response from "../../../core/utils/response.js";
import { asyncHandler } from "../../../core/utils/asyncHandler.js";

const RegimeTController = {
    create: asyncHandler(async (req, res) => {
        const data = await RegimeTService.create(req.body);
        return response.created(res, {
            message: "Regime tributário criado com sucesso",
            data,
        });
    }),

    getAll: asyncHandler(async (req, res) => {
        const data = await RegimeTService.getAll();
        return response.success(res, {
            message: "Regimes tributários encontrados com sucesso",
            data,
        });
    }),

    getById: asyncHandler(async (req, res) => {
        const data = await RegimeTService.getById(req.params.id);
        return response.success(res, {
            message: "Regime tributário encontrado com sucesso",
            data,
        });
    }),

    update: asyncHandler(async (req, res) => {
        const data = await RegimeTService.update(Number(req.params.id), req.body);
        return response.success(res, {
            message: "Regime tributário atualizado com sucesso",
            data,
        });
    }),

    delete: asyncHandler(async (req, res) => {
        const data = await RegimeTService.delete(Number(req.params.id));
        return response.success(res, {
            message: "Regime tributário excluído com sucesso",
            data,
        });
    }),
};

export default RegimeTController;