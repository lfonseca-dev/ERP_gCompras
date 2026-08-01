import EmpresaService from "./empresa.service.js";
import * as response from "../../../core/utils/response.js";
import { asyncHandler } from "../../../core/utils/asyncHandler.js";

const EmpresaController = {
    create: asyncHandler(async (req, res) => {
        const data = await EmpresaService.create(req.body);
        return response.created(res, {
            message: "Empresa cadastrada",
            data
        });
    }),

    getAll: asyncHandler(async (req, res) => {
        const data = await EmpresaService.getAll();
        return response.success(res, {
            message: "Empresas listadas",
            data
        });
    }),

    getById: asyncHandler(async (req, res) => {
        const data = await EmpresaService.getById(req.params.id);
        return response.success(res, {
            message: "Empresa encontrada",
            data
        });
    }),

    update: asyncHandler(async (req, res) => {
        const data = await EmpresaService.update(Number(req.params.id), req.body);
        return response.success(res, {
            message: "Empresa atualizada",
            data
        });
    }),

    delete: asyncHandler(async (req, res) => {
        const data = await EmpresaService.delete(Number(req.params.id));
        return response.success(res, {
            message: "Empresa excluída",
            data
        });
    })
};

export default EmpresaController;