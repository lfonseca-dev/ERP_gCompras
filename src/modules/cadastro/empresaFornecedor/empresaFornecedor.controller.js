import EmpresaFornecedorService from "./empresaFornecedor.service.js";
import * as response from "../../../core/utils/response.js";
import { asyncHandler } from "../../../core/utils/asyncHandler.js";

const EmpresaFornecedorController = {

    create: asyncHandler(async (req, res) => {
        const empresa_id = req.user.empresa_id;
        const { fornecedor_id } = req.body;

        const data = await EmpresaFornecedorService.create(empresa_id,fornecedor_id);
        return response.created(res, {
            message: "Fornecedor vinculado",
            data
        });
    }),

    getById: asyncHandler(async (req, res) => {
        const data = await EmpresaFornecedorService.getById(req.params.id);
        return response.success(res, {
            message: "Vínculo encontrado",
            data
        });
    }),

    getAllByEmpresa: asyncHandler(async (req, res) => {
        const empresa_id = req.user.empresa_id;
        const data = await EmpresaFornecedorService.getAllByEmpresa(empresa_id);

        return response.success(res, {
            message: "Vínculos listados",
            data
        });
    })
};

export default EmpresaFornecedorController;