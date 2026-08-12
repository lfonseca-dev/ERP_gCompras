import EmpresaFornecedorRepository from "./empresaFornecedor.repository.js";
import { AppError } from "../../../core/utils/AppError.js";

const EmpresaFornecedorService = {

    async create(empresa_id, fornecedor_id) {
        const existingVinculo = await EmpresaFornecedorRepository.getByEmpresaFornecedor( empresa_id, fornecedor_id);

        if (existingVinculo) {
            throw new AppError({
                message: "Vínculo já existe",
                reason: "VINCULO_ALREADY_EXISTS",
                statusCode: 409,
            });
        }

        return await EmpresaFornecedorRepository.create({ empresa_id, fornecedor_id});
    },

    async getById(id) {
        const vinculo = await EmpresaFornecedorRepository.getById(id);

        if (!vinculo) {
            throw new AppError({
                message: "Vínculo não encontrado",
                reason: "VINCULO_NOT_FOUND",
                statusCode: 404,
            });
        }
        return vinculo;
    },

    async getByEmpresaFornecedor(empresa_id, fornecedor_id) {
        const vinculo = await EmpresaFornecedorRepository.getByEmpresaFornecedor(empresa_id, fornecedor_id);

        if (!vinculo) {
            throw new AppError({
                message: "Vínculo não encontrado",
                reason: "VINCULO_NOT_FOUND",
                statusCode: 404,
            });
        }
        return vinculo;
    },

    async getAllByEmpresa(empresa_id) {
        const vinculos = await EmpresaFornecedorRepository.getAllByEmpresa(empresa_id);

        if (!vinculos || vinculos.length === 0) {
            throw new AppError({
                message: "Nenhum vínculo encontrado",
                reason: "VINCULOS_NOT_FOUND",
                statusCode: 404,
            });
        }
        return vinculos;
    },

    async validateVinculo(empresa_id, fornecedor_id) {
        const vinculo = await EmpresaFornecedorRepository.getByEmpresaFornecedor(empresa_id, fornecedor_id);

        if (!vinculo) {
            throw new AppError({
                message: "Fornecedor não vinculado à empresa",
                reason: "FORNECEDOR_NOT_LINKED_TO_COMPANY",
                statusCode: 403,
            });
        }
        return vinculo;
    }
};

export default EmpresaFornecedorService;