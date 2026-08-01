import FornecedorService from "./fornecedor.service.js";
import * as response from "../../../core/utils/response.js";
import { asyncHandler } from "../../../core/utils/asyncHandler.js";

const FornecedorController = {
    create: asyncHandler(async (req, res) => {
        const data = await FornecedorService.create(req.body);
        return response.created(res, {
            message: "Fornecedor cadastrado",
            data
        });
    }),

    getAll: asyncHandler(async (req, res) => {
        const data = await FornecedorService.getAll();
        return response.success(res, {
            message: "Fornecedores listados",
            data
        });
    }),

    getById: asyncHandler(async (req, res) => {
        const data = await FornecedorService.getById(req.params.id);
        return response.success(res, {
            message: "Fornecedor encontrado",
            data
        });
    }),

    getByDescricao: asyncHandler(async (req, res) => {
        const data = await FornecedorService.getByDescricao(req.params.descricao);
        return response.success(res, {
            message: "Fornecedor encontrado",
            data
        });
    }),

    update: asyncHandler(async (req, res) => {
        const data = await FornecedorService.update(Number(req.params.id), req.body);
        return response.success(res, {
            message: "Fornecedor atualizado",
            data
        });
    }),

    delete: asyncHandler(async (req, res) => {
        const data = await FornecedorService.delete(Number(req.params.id));
        return response.success(res, {
            message: "Fornecedor excluído",
            data
        });
    })
};

export default FornecedorController;